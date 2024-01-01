import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const FormContext = createContext();

const initialState = {
  step: 0,
  personalInfo: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  plan: { type: "", yearly: false },
  addOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
  error: false,
  confirm: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "step/decrease": {
      const curStep = state.step;
      return {
        ...state,
        step: curStep > 0 ? state.step - 1 : state.step,
      };
    }
    case "step/increase": {
      const error = state.error;
      return {
        ...state,
        step: state.step < 3 ? state.step + 1 : state.step,
        confirm: !error && state.step === 3 && true,
      };
    }

    case "step/update": {
      return {
        ...state,
        step: action.payload,
      };
    }

    case "personalInfo/update":
      return {
        ...state,
        personalInfo: action.payload,
      };

    case "planType/update":
      return {
        ...state,
        plan: action.payload,
      };

    case "planDuration/update":
      return {
        ...state,
        plan: action.payload,
      };

    case "addOn/update":
      return {
        ...state,
        addOns: action.payload,
      };

    case "error/update":
      return {
        ...state,
        error: action.payload,
      };

    default:
      throw new Error("Action unknown");
  }
}

function FormProvider({ children }) {
  const [{ step, personalInfo, plan, addOns, error, confirm }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <FormContext.Provider
      value={{ step, personalInfo, plan, addOns, error, confirm, dispatch }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);

  if (context === undefined)
    throw new Error("FormContext was usedotuside the of the FormContext");

  return context;
}

FormProvider.propTypes = {
  children: PropTypes.array,
};

export { FormProvider, useForm };
