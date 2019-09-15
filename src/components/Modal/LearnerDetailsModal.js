import React from 'react';
import Modal from 'react-modal';

class LearnerDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: true,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <Modal
          className="modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Slot Details</h2>
          <form>
            <section className="card-content">
              <div>
                <label for="userEmail">Start of Session</label>
                <br></br>
                <input name="userEmail" id="userEmail" type="text"></input>
              </div>
              <div>
                <label for="userPass">End of Session</label>
                <br></br>
                <input name="userPass" id="userPass" type="text"></input>
              </div>
              <div>
                <label for="userPassConfirm">Location</label>
                <br></br>
                <input
                  name="userPassConfirm"
                  id="userPassConfirm"
                  type="text"
                ></input>
              </div>
              <div>
                <label for="userPassConfirm">Contact</label>
                <br></br>
                <input
                  name="userPassConfirm"
                  id="userPassConfirm"
                  type="text"
                ></input>
              </div>
              <ul className="info">
                <li>Contact your tutor for exact meeting location.</li>
              </ul>
            </section>
          </form>
        </Modal>
      </div>
    );
  }
}

export default LearnerDetails;
