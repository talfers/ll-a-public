// export const bg = "#fff";
// export const headline = "#000000";
// export const paragraph = "#301e4e";
// export const cardBG = "#fff";
// export const cardText = "#301e4e";
// export const activeColor = "#ff6e6c";
let theme = 'dark';

export const bg = theme==='dark'?"#301e4e":'#fff';
export const headline = theme==='dark'?"#ffffff":'#301e4e';
export const paragraph = theme==='dark'?"#c9bae2":'grey';
export const cardBG = theme==='dark'?"#463366":'#fff';
export const cardText = theme==='dark'?"#cabae2":'#301e4e';
export const activeColor = theme==='dark'?"#ff6e6c":'#301e4e';
export const ff = "'Nunito', sans-serif";
export const contrastText = theme==='dark'?"#ffffff":'#000';
export const boxShadow = theme==='dark'?"":'0 2px 10px rgba(0, 0, 0, 0.15)'