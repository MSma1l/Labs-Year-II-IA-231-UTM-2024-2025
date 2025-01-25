import React from 'react';

const Mayor = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold mb-4">Primarul Comunei Iscalau</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img
            src="https://scontent.fkiv1-1.fna.fbcdn.net/v/t39.30808-6/392935812_6447951128663672_7662930530736940672_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XL3iakoZWAAQ7kNvgEAJtlt&_nc_ht=scontent.fkiv1-1.fna&_nc_gid=Ar-h6g8Iqxr9yHEtz7D4imk&oh=00_AYCVVutIPoBBYD6FWpsemtmiNQTyCkUhxm689eTN1olpjQ&oe=671335B2"
            alt="Primarul Comunei Iscalau"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h3 className="text-2xl font-semibold mb-2">Boiciuc Alexandru</h3>
          <p className="mb-4">Data Nașterei: 22.05.1993</p>
          <p className="mb-4">Cetațenia: Moldovean</p>
          <p className="mb-4">Studiile: Colegiu tehnic feroviar/
          Alecu Russo State University of Bălți</p>
          <p className="mb-4">Mandat: 2021-2023/2023 - 2027</p>
          <p className="mb-4">
            Boiciuc Alexandru este primarul dedicat al Comunei Iscalau,  A fost ales în funcție
            în anul 2023, aducând cu sine o viziune de dezvoltare durabilă și
            modernizare a comunei.
          </p>
          <p className="mb-4"></p>
          <p>
            Printre prioritățile sale se numără îmbunătățirea infrastructurii
            locale, atragerea de investiții și creșterea calității vieții pentru
            toți locuitorii comunei Iscalau.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mayor;
