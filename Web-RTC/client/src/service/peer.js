class PeerService {
  constructor() {
    if (!this.peer) {
      this.peer = new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
      });
    }
  }

  async getAnswer(offer) {
    if (this.peer) {
      console.log('Received offer:', offer);
      if (offer && offer.type && offer.sdp) {
        await this.peer.setRemoteDescription(offer);
        const ans = await this.peer.createAnswer();
        await this.peer.setLocalDescription(ans);
        console.log('Generated answer:', ans);
        return ans;
      } else {
        throw new Error('Invalid offer object');
      }
    }
  }

  async setLocalDescription(ans) {
    if (this.peer) {
      console.log('Setting local description:', ans);
      if (ans && ans.type && ans.sdp) {
        await this.peer.setRemoteDescription(ans);
      } else {
        throw new Error('Invalid answer object');
      }
    }
  }

  async getOffer() {
    if (this.peer) {
      const offer = await this.peer.createOffer();
      await this.peer.setLocalDescription(offer);
      console.log('Generated offer:', offer);
      return offer;
    }
  }
}

export default new PeerService();
