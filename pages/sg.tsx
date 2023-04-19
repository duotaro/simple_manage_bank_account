// pages/sg.js
import { number } from "prop-types";

const sg = ({ random }: {random: number}) => {
  console.log(random);
  return <div>{random}</div>;
};

export default sg;

export const getStaticProps = async () => {
  const random = Math.floor( Math.random() * 100 );
  return {
    props: {
      random,
    },
  }
}