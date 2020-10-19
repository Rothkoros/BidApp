let all1Bids = [];
let all2Bids = [];
let totalBids = [];
let highestTotalBid = totalBids[0] || [];

function findHighest(totalBids) {
    let number = null;
    for (let i = 0; i < totalBids.length; i++) {
        number = totalBids[i];
        highestTotalBid = Math.max(highestTotalBid, number);
    }
    return highestTotalBid
}

function addTotalBids() {
    let totalBids = [];
    let mathMaxBids = Math.max(...all1Bids, ...all2Bids);
    totalBids.push(mathMaxBids);
    console.log(totalBids);
    document.getElementById('totalBid').innerHTML = totalBids;
}

function user1Bids() {
    let bid1Amount = document.getElementById("user1Bids").value;
    all1Bids.push(bid1Amount);
    console.log(all1Bids);
    document.getElementById("user1Bids").value = '';
    addTotalBids();


}


function user2Bids() {
    let bid2Amount = document.getElementById("user2Bids").value;
    all2Bids.push(bid2Amount);
    console.log(all2Bids);
    document.getElementById("user2Bids").value = '';
    addTotalBids();
}

function localStorageSave() {
    localStorage.setItem("highestTotalBid", JSON.stringify(highestTotalBid));
}

function localStorageGet() {
    let dataGet = JSON.parse(localStorage.getItem("highestTotalBid"));
    highestTotalBid.push(dataGet);
    document.getElementById('totalBid').innerHTML = '$ ' + highestTotalBid;
}
localStorageGet();