/**
 * Romantic Instrumental Wedding Music Engine (Web Audio API)
 * Plays a warm, soft, acoustic-modeled romantic piano and celesta arpeggio.
 * 100% self-contained, licensed/royalty-free, zero-latency, never breaks offline.
 */

class RomanticWeddingAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 0.35; // Comfortable soft volume
  private masterGain: GainNode | null = null;
  private delayNode: DelayNode | null = null;
  private feedbackGain: GainNode | null = null;
  private timerId: number | null = null;
  private currentStep: number = 0;
  private listeners: Set<(playing: boolean) => void> = new Set();

  // Romantic Canon-in-D inspired melody notes (frequencies in Hz)
  private melodyChords: { baseFreq: number; notes: number[] }[] = [
    // D Major
    { baseFreq: 146.83, notes: [293.66, 369.99, 440.00, 587.33, 739.99] },
    // A Major
    { baseFreq: 110.00, notes: [220.00, 277.18, 329.63, 440.00, 554.37] },
    // B Minor
    { baseFreq: 123.47, notes: [246.94, 293.66, 369.99, 493.88, 587.33] },
    // F# Minor
    { baseFreq: 92.50, notes: [185.00, 220.00, 277.18, 369.99, 440.00] },
    // G Major
    { baseFreq: 98.00, notes: [196.00, 246.94, 293.66, 392.00, 493.88] },
    // D Major / F#
    { baseFreq: 146.83, notes: [293.66, 369.99, 440.00, 587.33, 659.25] },
    // G Major
    { baseFreq: 98.00, notes: [196.00, 246.94, 293.66, 392.00, 493.88] },
    // A Sus4 -> A
    { baseFreq: 110.00, notes: [220.00, 293.66, 329.63, 440.00, 554.37] },
  ];

  private initContext() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();

    // Master gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

    // Warm hall reverb/delay simulation
    this.delayNode = this.ctx.createDelay();
    this.delayNode.delayTime.setValueAtTime(0.42, this.ctx.currentTime);

    this.feedbackGain = this.ctx.createGain();
    this.feedbackGain.gain.setValueAtTime(0.28, this.ctx.currentTime);

    const delayFilter = this.ctx.createBiquadFilter();
    delayFilter.type = "lowpass";
    delayFilter.frequency.setValueAtTime(1400, this.ctx.currentTime);

    // Wire delay loop
    this.delayNode.connect(delayFilter);
    delayFilter.connect(this.feedbackGain);
    this.feedbackGain.connect(this.delayNode);
    this.feedbackGain.connect(this.masterGain);

    this.masterGain.connect(this.ctx.destination);
  }

  // Play a soft acoustic piano-like note with dual warm harmonics
  private playPianoNote(freq: number, duration: number = 2.4, gainLevel: number = 0.22) {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;

    // Fundamental oscillator (sine with subtle triangle body)
    const osc1 = this.ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, now);

    const osc2 = this.ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 2, now); // 2nd harmonic sparkle

    // Note envelope gain
    const noteGain = this.ctx.createGain();
    // Soft attack, piano bell decay
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(gainLevel, now + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(gainLevel * 0.45, now + 0.35);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Lowpass filter for warm wooden piano timbre
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(Math.min(freq * 3.5, 2200), now);
    filter.frequency.exponentialRampToValueAtTime(Math.min(freq * 1.8, 1200), now + duration);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(filter);
    filter.connect(this.masterGain);

    if (this.delayNode) {
      filter.connect(this.delayNode);
    }

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  }

  private step = () => {
    if (!this.isPlaying || !this.ctx) return;

    const chordIndex = Math.floor(this.currentStep / 4) % this.melodyChords.length;
    const subStep = this.currentStep % 4;
    const chord = this.melodyChords[chordIndex];

    // Play bass root note on first beat
    if (subStep === 0) {
      this.playPianoNote(chord.baseFreq, 3.2, 0.28);
    }

    // Play arpeggio melody note
    const noteIndex = subStep % chord.notes.length;
    const noteFreq = chord.notes[noteIndex];
    // Gentle velocity variation
    const velocity = 0.16 + (subStep === 2 ? 0.06 : 0.02);
    this.playPianoNote(noteFreq, 2.6, velocity);

    // Play optional gentle upper sparkle note on beat 2 or 3
    if (subStep === 2 && Math.random() > 0.4) {
      const highNote = chord.notes[chord.notes.length - 1];
      setTimeout(() => {
        if (this.isPlaying) {
          this.playPianoNote(highNote * 1.5, 1.8, 0.08);
        }
      }, 250);
    }

    this.currentStep++;
    // Tempo: ~580ms per 8th-note = ~52 BPM (largo, romantic, relaxing)
    this.timerId = window.setTimeout(this.step, 580);
  };

  public async start(): Promise<void> {
    this.initContext();
    if (!this.ctx) return;

    if (this.ctx.state === "suspended") {
      try {
        await this.ctx.resume();
      } catch {
        // Handled silently
      }
    }

    if (this.isPlaying) return;
    this.isPlaying = true;
    this.currentStep = 0;

    // Smooth fade in
    if (this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(
        this.isMuted ? 0.0001 : this.volume,
        now + 1.2
      );
    }

    this.step();
    this.notify();
  }

  public pause(): void {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.notify();
  }

  public toggle(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.start();
    }
  }

  public setVolume(val: number): void {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public toggleMute(): void {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      const target = this.isMuted ? 0.0001 : this.volume;
      this.masterGain.gain.setValueAtTime(target, this.ctx.currentTime);
    }
    this.notify();
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public getVolume(): number {
    return this.volume;
  }

  public subscribe(cb: (playing: boolean) => void): () => void {
    this.listeners.add(cb);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }
}

export const weddingAudio = new RomanticWeddingAudioEngine();
