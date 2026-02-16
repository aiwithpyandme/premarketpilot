async function loadData() {
    const response = await fetch('/premarket');
    const data = await response.json();

    document.getElementById('gappers').innerText = "Top Gappers: " + data.gappers.join(", ");
    document.getElementById('volume').innerText = "Volume Spikes: " + data.volume_spikes.join(", ");
}

// Load data when page loads
window.onload = loadData;
