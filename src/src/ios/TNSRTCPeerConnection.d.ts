import { TNSRTCSessionDescription } from './TNSRTCSessionDescription';
import { TNSRTCPeerConnectionState } from './TNSRTCPeerConnectionState';
import { TNSRTCIceServer } from './TNSRTCIceServer';
import { TNSRTCIceCandidate } from './TNSRTCIceCandidate';
import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';
import { TNSRTCDataChannelInit } from '../core/TNSRTCDataChannelInit';
import { TNSRTCDataChannel } from './TNSRTCDataChannel';
import { TNSRTCMediaConstraints } from '../core/TNSRTCMediaConstraints';
import { TNSRTCDataChannelEvent, TNSRTCMediaStream, TNSRTCTrackEvent } from './';
import { TNSRTCConfiguration } from './TNSRTCConfiguration';
export declare class TNSRTCPeerConnection {
    ios: FancyRTCPeerConnection;
    constructor(config?: TNSRTCConfiguration);
    readonly localDescription: TNSRTCSessionDescription;
    readonly remoteDescription: TNSRTCSessionDescription;
    readonly connectionState: TNSRTCPeerConnectionState;
    onConnectionStateChange(callback: () => void): void;
    onTrack(callback: (track: TNSRTCTrackEvent) => void): void;
    onRemoveTrackListener(callback: () => void): void;
    onRemoveStream(callback: (stream: TNSRTCMediaStream) => void): void;
    onIceGatheringStateChange(callback: any): void;
    onAddStream(callback: any): void;
    onNegotiationNeeded(callback: () => void): void;
    onSignalingStateChange(callback: () => void): void;
    onIceCandidate(callback: (candidate: TNSRTCIceCandidate) => void): void;
    onDataChannel(callback: (channel: TNSRTCDataChannelEvent) => void): any;
    defaultIceServers(): Array<TNSRTCIceServer>;
    addIceCandidate(candidate: TNSRTCIceCandidate): void;
    addTrack(track: TNSRTCMediaStreamTrack, streamIds: Array<string>): void;
    close(): void;
    createDataChannel(label: string, channelInit: TNSRTCDataChannelInit): TNSRTCDataChannel;
    createAnswer(mediaConstraints: TNSRTCMediaConstraints): Promise<TNSRTCSessionDescription>;
    createOffer(mediaConstraints: TNSRTCMediaConstraints): Promise<TNSRTCSessionDescription>;
    setLocalDescription(sdp: TNSRTCSessionDescription): Promise<any>;
    setRemoteDescription(sdp: TNSRTCSessionDescription): Promise<any>;
    dispose(): void;
}