import Form from "../form/Form";

const Modal = () => {
  return (
    <div className="absolute flex justify-center top-20 w-screen z-30">
      <div className="w-1/3 px-10 py-20 pt-20 bg-white">
        <Form />
      </div>
    </div>
  );
};

export default Modal;
