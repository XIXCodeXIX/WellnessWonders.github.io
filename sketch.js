function setup() {
  createCanvas(600, 400);
  const button1 = select("#button1");
  const button2 = select("#button2");

  button1.mousePressed(() => {
    window.location.href =
      "https://xixcodexix.github.io/BruiseDetection.github.io/";
  });

  button2.mousePressed(() => {
    window.location.href =
      "https://xixcodexix.github.io/PeeDetector.github.io/";
  });
}
