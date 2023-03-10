import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">ID</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTH">Study</th>
          <th className="widgetLgTh">Facility</th>
          <th className="widgetLgTh">Initals</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jan 2022</td>
          <td className="widgetLgAmount">CV009 </td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
          <td className="widgetLgUser">
            <span className="widgetLgName">SC</span>
          </td>
       </tr>


        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">3 Jan 2022</td>
          <td className="widgetLgAmount">CV010</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
          <td className="widgetLgUser">
            <span className="widgetLgName">SC</span>
          </td>
        </tr>


        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">CV010</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
          <td className="widgetLgUser">
            <span className="widgetLgName">SC</span>
          </td>
        </tr>


        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">CV009</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
          <td className="widgetLgUser">
            <span className="widgetLgName">SC</span>
          </td>
        </tr>

      </table>
    </div>
  );
}
