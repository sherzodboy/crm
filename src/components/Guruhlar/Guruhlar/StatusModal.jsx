import { Arrow, Icon, ModalContainer, StatusWraper } from './style';

/* eslint-disable react/prop-types */
const StatusModal = ({ open, align }) => {
  return open ? (
    <ModalContainer x={align.x} y={align.y}>
      <Arrow />
      <StatusWraper>
        <Icon.Keldi /> Keldi
      </StatusWraper>
      <StatusWraper>
        <Icon.Sababsiz /> Sababsiz
      </StatusWraper>
      <StatusWraper>
        <Icon.Sababli /> Sababli
      </StatusWraper>
      <StatusWraper>
        <Icon.Birinchi /> Birinchi dars
      </StatusWraper>
    </ModalContainer>
  ) : null;
};

export default StatusModal;
