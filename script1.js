let packetsTotal = 0;
let packetsCorrupted = [];
let initial =1;
function sendDataPacket(packetsTotal) {
  const screen = document.getElementById("animation-screen");
  // get the window size fron user input
  const windowSize = document.getElementById("window-size").value;
  for (let i = 1; i <= Math.ceil(1.0*packetsTotal/windowSize); i++) {
      let string ="";
      // making the window size packets
      for(let i=0;i<windowSize;i++){
        string+=initial;
        initial++;
      }
    const packet = `<tr><div class="data-packet-wrapper">Packet Number : ${string}</div></tr>`;
    screen.innerHTML += packet;
  }
  const packets = document.getElementsByClassName("data-packet-wrapper");
  for (let i = 0; i < packets.length; i++) {
    const element = packets[i];
    element.style.borderRadius = "1rem";
    element.style.width = "20%";
    element.style.color = "white";
    element.style.marginTop = "1rem";
    element.style.textAlign = "center";
    element.style.backgroundColor = "black";
    element.style.border = "2px solid black";
    element.style.animation ="normalAnimation";
    element.style.animationDuration = "4s";
    element.style.animationDelay = `${i * 4000}ms`;
  }
}

function sendPackets() {
  const sendButton = document.getElementById("send-button");
  // Get number of packets from user input
  packetsTotal = parseInt(document.getElementById("total-packets").value);
  console.log(packetsTotal)

  sendDataPacket(packetsTotal);
}

// Attach click event listener to send button
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", sendPackets);
