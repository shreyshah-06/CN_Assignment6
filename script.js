let packetsTotal = 0;
let packetsCorrupted = [];

function sendDataPacket(packetsTotal, packetsCorrupted) {
  const screen = document.getElementById("animation-screen");
  for (let i = 1; i <= packetsTotal; i++) {
    const checkCorrupt = packetsCorrupted.indexOf(i) !== -1;
    const packet = `<tr><div class="data-packet-wrapper ${
      checkCorrupt ? "corrupt" : ""
    }">Packet Number : ${i}</div></tr>`;
    screen.innerHTML += packet;
  }
  const packets = document.getElementsByClassName("data-packet-wrapper");
  for (let i = 0; i < packets.length; i++) {
    const element = packets[i];
    const isCorrupt = element.classList.contains("corrupt");
    element.style.borderRadius = "1rem";
    element.style.width = "20%";
    element.style.color = "white";
    element.style.marginTop = "1rem";
    element.style.textAlign = "center";
    element.style.backgroundColor = "black";
    element.style.border = isCorrupt ? "5px solid red" : "2px solid black";
    element.style.animation = isCorrupt
      ? "corruptedAnimation"
      : "normalAnimation";
    element.style.animationDuration = "4s";
    element.style.animationDelay = `${i * 4000}ms`;
  }
}

function sendPackets() {
  const sendButton = document.getElementById("send-button");
  // Get number of packets and corrupted packets from user input
  packetsTotal = parseInt(document.getElementById("total-packets").value);
  const packetsCorruptedIn =
    document.getElementById("corrupted-packets").value;
  if (packetsCorruptedIn !== "") {
    packetsCorrupted = packetsCorruptedIn.split(",").map(Number);
  }
  sendDataPacket(packetsTotal, packetsCorrupted);
}

// Attach click event listener to send button
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", sendPackets);
