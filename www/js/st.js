//create one of Tone's built-in synthesizers and connect it to the master output
var synth = new Tone.SimpleSynth().toMaster();

//play a middle c for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");