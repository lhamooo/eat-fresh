import "./HistoryModal.css";
import { Modal, Table } from "react-bootstrap";

function HistoryModal({ handleClose }) {
  const props = Object.getOwnPropertyNames(localStorage);

  function getHistoryArray() {
    let historyArray = [];
    let historyPropArray = [];

    for (let p of props) {
      if (p.includes(".")) {
        historyPropArray.push(p);
      }
    }

    for (let props of historyPropArray) {
      let name = localStorage.getItem(props);
      historyArray.push(name);
    }

    return historyArray;
  }

  return (
    <div>
      <Modal show={true} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Search History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive="sm">
            <tbody>
              {getHistoryArray().map((name) => (
                <tr>
                  <td className="history">{name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default HistoryModal;
