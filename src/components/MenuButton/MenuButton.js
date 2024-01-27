/*import { Container } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import HistoryIcon from "@mui/icons-material/History";
import { useState } from "react";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from "react-floating-button-menu";
import "./MenuButton.css";
import HistoryModal from "../HistoryModal/HistoryModal";

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Container className="floating-button">
        <FloatingMenu
          slideSpeed={500}
          direction="up"
          spacing={8}
          isOpen={isMenuOpen}
        >
          <MainButton
            className="main-button"
            iconResting={<AddIcon className="addIcon" />}
            iconActive={<CloseIcon className="closeIcon" />}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size={56}
          />
          <ChildButton
            className="child-button"
            icon={<HistoryIcon className="history" />}
            backgroundcolor="#00da91"
            onClick={() => setShowModal(true)}
            size={40}
          />
        </FloatingMenu>
      </Container>

      {showModal && <HistoryModal handleClose={setShowModal} />}
    </div>
  );
}
export default MenuButton;*/
