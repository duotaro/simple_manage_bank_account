const ssr = ({ random }: {random: number}) => {
  console.log(random);
  return <div>{random}</div>;
};

export default ssr;

// pages/ssr.js
export const getServerSideProps = async () =>  {
  const random = Math.floor( Math.random() * 100 );
  return {
    props: {
      random,
    },
  }
}