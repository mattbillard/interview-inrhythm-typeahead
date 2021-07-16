import { useSelector, TypedUseSelectorHook } from 'react-redux';
import {IStoreState} from "../redux";

export const useTypedSelector: TypedUseSelectorHook<IStoreState> = useSelector;