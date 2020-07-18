const AV = require('leancloud-storage');

const LeancloudClass = 'Comments'
export class leancloud{
  constructor(){
    AV.init({
      appId: 'EhwJqflyEni6OBfskCrmbPm2-gzGzoHsz',
      appKey: '9xQQXcskXIx5yNg4XKrs4DJg',
      serverURLs: 'https://ehwjqfly.lc-cn-n1-shared.com',
    });
    const Record = AV.Object.extend(LeancloudClass);
    this.record = new Record();
    this.query = new AV.Query(LeancloudClass)
  }
  insert(comment){
    Object.entries(comment).forEach(([key,val])=>{
      this.record.set(key,val);
    })
    this.record.save()
  }
  async getData(page){
    this.query.equalTo('page', page);
    return await this.query.find().then(this.normalizeData);
  }
  normalizeData(data){
    const res = []
    data = data.map(i=>i.attributes).sort((a,b)=>a.seq>b.seq);
    data.forEach(i=>{
      if(i.reply === null || i.reply === undefined){
        i.children = []
        res.push(i);
      }else{
        res[i.reply].push(i);
      }
    })
    return res;
  }
}