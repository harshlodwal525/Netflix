import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';
import HomeCarousel from './HomeCarousel';

// function ncard(val, index, Sdata) {
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   )
// }

ReactDOM.render(
  <>
        <h1 className="heading_style"> Top Series on Top OTT Platfroms </h1>
    <HomeCarousel />
    {/* <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    /> */}

    {/* {Sdata.map(function ncard(val){
      return(<Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
    );
    })} */}

    {Sdata.map((val,index) => {
    console.log(index)
      return (<Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
      );
    })}

  </>
  , document.getElementById("root"));

