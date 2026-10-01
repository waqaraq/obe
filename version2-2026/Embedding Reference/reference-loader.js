// Generated loader for compact reference embedding packages
export async function loadReferencePair(baseUrl, stem) {
  const root=String(baseUrl).replace(/\/$/,'');
  const [j,b]=await Promise.all([fetch(root+'/'+stem+'.json'),fetch(root+'/'+stem+'.f32')]);
  if(!j.ok||!b.ok) throw new Error('Failed to load reference pair: '+root+'/'+stem);
  const meta=await j.json(), buffer=await b.arrayBuffer();
  const expected=meta.vector.record_count*meta.vector.dimension*4;
  if(buffer.byteLength!==expected) throw new Error('Vector byte length mismatch for '+stem);
  return {meta,vectors:new Float32Array(buffer)};
}
export function dotVectorAt(query,vectors,index,dimension=384){
  if(query.length!==dimension) throw new Error('Query dimension mismatch');
  let sum=0,off=index*dimension;
  for(let i=0;i<dimension;i++) sum+=query[i]*vectors[off+i];
  return sum;
}
export function scoreIndex(index,query){
  return index.meta.records.map(r=>({record:r,score:dotVectorAt(query,index.vectors,r.vector_index,index.meta.vector.dimension)})).sort((a,b)=>b.score-a.score);
}
