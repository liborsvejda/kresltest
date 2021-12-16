function poNacteni() {
  let cnv = document.getElementById("platno");
  let ctx = cnv.getContext("2d");

  
  ctx.moveTo(0, 0);
  ctx.lineTo(100,100);
  ctx.stroke();

  ctx.moveTo(100, 0);
  ctx.lineTo(0,100);
  ctx.stroke();

  ctx.rect(100,100,20,10);
  ctx.fillStyle = "red";
  ctx.fill();
}