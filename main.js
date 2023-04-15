window.onload = function () {
  const parallax = document.querySelector(".parallax");

  if (parallax) {
    const sky = document.querySelector(".item__sky");
    const mountains = document.querySelector(".item__mountains");
    const forest = document.querySelector(".item__forest");

    const forSky = 40;
    const forMountains = 30;
    const forForest = 15;

    const speed = 0.1;

    let positionX = 0,
      positionY = 0,
      coordXpercent = 0,
      coordYpercent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXpercent - positionX;
      const distY = coordYpercent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      sky.style.cssText = `transform: translate(
		${positionX / forSky}%, 
		${positionY / forSky}%);`;
      mountains.style.cssText = `transform: translate(
		${positionX / forMountains}%, 
		${positionY / forMountains}%);`;
      forest.style.cssText = `transform: translate(
		${positionX / forForest}%, 
		${positionY / forForest}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();
    parallax.addEventListener("mousemove", (e) => {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXpercent = (coordX / parallaxWidth) * 100;
      coordYpercent = (coordY / parallaxHeight) * 100;
    });
  }
};
