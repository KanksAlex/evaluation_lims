import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
/* import { useExcelDownloder } from 'react-xls'; */


export default function FeaturedInfo() {
  /*   const { ExcelDownloder, Type } = useExcelDownloder();
  
    // We will make a Workbook contains 2 Worksheets
  const data = {
    // Worksheet named animals
    animals: [
      { name: 'cat', category: 'animal' },
      { name: 'dog', category: 'animal' },
      { name: 'pig', category: 'animal' },
    ],
    // Worksheet named pokemons
    pokemons: [
      { name: 'pikachu', category: 'pokemon' },
      { name: 'Arbok', category: 'pokemon' },
      { name: 'Eevee', category: 'pokemon' },
    ],
  };
   */

  return (

    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">CV009 Phase I</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {/*   <ExcelDownloder
    data={data}
    filename={'CV009 Phase I'}
    type={Type.Link} // or type={'button'}
  >  */}
            415 Participants
            {/* </ExcelDownloder> */}
          </span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">CV009 Phase II</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {/*  <ExcelDownloder
    data={data}
    filename={'CV009 Phase II'}
    type={Type.Link} // or type={'button'}
  >  */}
            315 Participants {/* </ExcelDownloder> */}
          </span>
        </div>
      </div>


      <div className="featuredItem">
        <span className="featuredTitle">CO10</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {/*   <ExcelDownloder
            data={data}
            filename={'CV009 Phase II'}
            type={Type.Link} // or type={'button'}
            >  */}
            0 Participant{/* </ExcelDownloder> */}
          </span>
        </div>
      </div>
    </div>
  );
}
