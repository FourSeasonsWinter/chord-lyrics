const C = { name: ["C", "C"] };
const Db = { name: ["Db", "C#"] };
const D = { name: ["D", "D"] };
const Eb = { name: ["Eb", "D#"] };
const E = { name: ["E", "E"] };
const F = { name: ["F", "F"] };
const Gb = { name: ["Gb", "F#"] };
const G = { name: ["G", "G"] };
const Ab = { name: ["Ab", "G#"] };
const A = { name: ["A", "A"] };
const Bb = { name: ["Bb", "A#"] };
const B = { name: ["B", "B"] };

const first = [E, F, Gb, G, Ab, A, Bb, B, C, Db, D, Eb, E];
const second = [B, C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B];
const third = [G, Ab, A, Bb, B, C, Db, D, Eb, E, F, Gb, G];
const fourth = [D, Eb, E, F, Gb, G, Ab, A, Bb, B, C, Db, D];
const fifth = [A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab, A];
const sixth = [E, F, Gb, G, Ab, A, Bb, B, C, Db, D, Eb, E];

const notesLength = first.length;
const repeatedNotes = first.concat(first.slice(1));

let loaded = false;
let notes = [];

export function getNotes() {
  if (!loaded) {
    const strings = [first, second, third, fourth, fifth, sixth]

    for (let i = 0; i < notesLength; ++i) {
      strings.map(string => {
        notes.push(string[i])
      })
    }
  }

  notes.reverse()
  loaded = true;
  return notes;
}

export function getRepeatedNotes() {
  return repeatedNotes;
}