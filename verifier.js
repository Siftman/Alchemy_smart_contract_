function verify(string proof) public returns (bool) {
    if (usedProofs[proof]) return false;

    if (proofBytes.length == 0) return false;
    if (proofBytes.length < 150) return false;

    for (uint i = 0; i < prefix.length; i++) {
        if (proofBytes[i] != prefix[i]) return false;
    }

    colonCount = 0;
    lastColonPos = 0;
    for (uint i = 0; i < proofBytes.length; i++) {
        if (proofBytes[i] == bytes1(":")) {
            colonCount++;
            lastColonPos = i;
        }