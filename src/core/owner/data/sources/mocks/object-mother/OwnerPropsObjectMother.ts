import { OwnerProps } from '@core/owner/domain/types';
import { OwnerPropsDataBuilder } from '../data-builder';

export class OwnerPropsObjectMother {
  static valid(): OwnerProps {
    return OwnerPropsDataBuilder.props().valid().build();
  }

  static withoutID(): OwnerProps {
    return OwnerPropsDataBuilder.props().withoutID().build();
  }

  static withoutName(): OwnerProps {
    return OwnerPropsDataBuilder.props().withoutName().build();
  }

  static blankName(): OwnerProps {
    return OwnerPropsDataBuilder.props().blankName().build();
  }

  static invalidName(): OwnerProps {
    return OwnerPropsDataBuilder.props().invalidName().build();
  }

  static longName(): OwnerProps {
    return OwnerPropsDataBuilder.props().longName().build();
  }

  static withoutDocumentNumber(): OwnerProps {
    return OwnerPropsDataBuilder.props().withoutDocumentNumber().build();
  }

  static invalidDocumentNumber(): OwnerProps {
    return OwnerPropsDataBuilder.props().invalidDocumentNumber().build();
  }

  static blankDocumentNumber(): OwnerProps {
    return OwnerPropsDataBuilder.props().blankDocumentNumber().build();
  }
}
