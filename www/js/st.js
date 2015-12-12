function dumbloop() {
  for (var i = 1; i < 50; i++) {
    var note = i-100;
    var time = i+1;
    var velocity = i*10;
    var dist = new Tone.Distortion(i*1000).toMaster();
    var fm = new Tone.SimpleFM().connect(dist); 

    if (i % 2 == 0) {
      fm.triggerAttack(note, time, velocity);
    } else {
      fm.triggerAttackRelease(note, time, velocity);
    }
  }
}