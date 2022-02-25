// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { KeyPair } from '../model/key-pair';


export class KeyPairResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):KeyPairResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsKeyPairResponse(bb:flatbuffers.ByteBuffer, obj?:KeyPairResponse):KeyPairResponse {
  return (obj || new KeyPairResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsKeyPairResponse(bb:flatbuffers.ByteBuffer, obj?:KeyPairResponse):KeyPairResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new KeyPairResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

output(obj?:KeyPair):KeyPair|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new KeyPair()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

error():string|null
error(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
error(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startKeyPairResponse(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addOutput(builder:flatbuffers.Builder, outputOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, outputOffset, 0);
}

static addError(builder:flatbuffers.Builder, errorOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, errorOffset, 0);
}

static endKeyPairResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createKeyPairResponse(builder:flatbuffers.Builder, outputOffset:flatbuffers.Offset, errorOffset:flatbuffers.Offset):flatbuffers.Offset {
  KeyPairResponse.startKeyPairResponse(builder);
  KeyPairResponse.addOutput(builder, outputOffset);
  KeyPairResponse.addError(builder, errorOffset);
  return KeyPairResponse.endKeyPairResponse(builder);
}
}