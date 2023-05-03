import { Field, ErrorMessage } from "formik";
import "../../styles.css";

export const CustomCheck = () => {
  return (
    <>
      <div className="custom_check">
        <Field type="checkbox" name="acceptTerms" />
        <label>Accept Terms & Conditions</label>
      </div>
      <ErrorMessage name="acceptTerms" />
    </>
  );
};
