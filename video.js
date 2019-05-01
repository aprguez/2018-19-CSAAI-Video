function main(){
  video_1 = document.getElementById('video_1');
  video_1.volume = 0.0;

  video_2 = document.getElementById('video_2');
  video_2.volume = 0.0;

  video_3 = document.getElementById('video_3');
  video_3.volume = 0.0;

  display = document.getElementById("display")

  // Tamaño de los video_s
  video_1.width = 300;
  video_1.height = 200;

  video_2.width = 300;
  video_2.height = 200;

  video_3.width = 300;
  video_3.height = 200;

  display.width = 250;
  display.height = 200;

  //Audio onmouse video_ 1
  video_1.onmouseover = () => {
    console.log('Audio ON!')
    video_1.muted = false;
    video_1.style.backgroundColor = "lightgray"
  }
  video_1.onmouseout = () => {
    console.log('Audio OFF')
    video_1.muted =true;
    video_1.style.backgroundColor = ""
  }

  plano1 = document.getElementById('plano1');

  plano1.onclick = () => {
    display.src  ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  }

  // Audio onmouse video_ 2
  video_2.onmouseover = () => {
    console.log('Audio ON!')
    video_2.muted = false;
    video_2.style.backgroundColor = "lightgray"
  }
  video_2.onmouseout = () => {
    console.log('Audio OFF')
    video_2.muted =true;
    video_2.style.backgroundColor = ""
  }

  plano2 = document.getElementById('plano2');

  plano2.onclick = () => {
    display.src  ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  }

  // Audio onmouse video_ 3
  video_3.onmouseover = () => {
    console.log('Audio ON!')
    video_3.muted = false;
    video_3.style.backgroundColor = "lightgray"
  }

  video_3.onmouseout = () => {
    console.log('Audio OFF')
    video_3.muted =true;
    video_3.style.backgroundColor = ""
  }

  plano3 = document.getElementById('plano3');

  plano3.onclick = () => {
    display.src  ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";
  }
}
