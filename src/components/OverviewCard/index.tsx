import './styles.scss';

import { ReactComponent as DownSvg } from '../../assets/icon-down.svg';
import { ReactComponent as UpSvg } from '../../assets/icon-up.svg';

import { ReactComponent as FacebookSvg } from '../../assets/icon-facebook.svg';
import { ReactComponent as InstagramSvg } from '../../assets/icon-instagram.svg';
import { ReactComponent as TwitterSvg } from '../../assets/icon-twitter.svg';
import { ReactComponent as YoutubeSvg } from '../../assets/icon-youtube.svg';
import { OverviewProps } from '../../pages/Dashboard';

type Props = {
  data: OverviewProps;
}

export function OverviewCard({ data }: Props) {

  function iconSvg(type: string) {
    switch (type) {
      case "instagram":
        return <InstagramSvg />;
      case "facebook":
        return <FacebookSvg />;
      case "youtube":
        return <YoutubeSvg />;
      default:
        return <TwitterSvg />
    }
  }

  return (
    <div id="overview-card-container">
      <div id="left-content" className="align-content">
        <span>{data.title}</span>
        <strong>{data.total}</strong>
      </div>
      <div id="right-content" className="align-content">
        {iconSvg(data.type)}
        <div id="percent-overview" className={data.status ? "green-status" : "red-status"}>
          {data.status
            ? <UpSvg />
            : <DownSvg />
          }
          <span id="margin-left">{data.percent}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
}