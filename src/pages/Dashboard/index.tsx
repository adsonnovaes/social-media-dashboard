import { FollowersCard } from '../../components/FollowersCard';
import { Header } from '../../components/Header';
import { OverviewCard } from '../../components/OverviewCard';

import db from '../../data/dataFake.json';
import db_overview from '../../data/fakeOverview.json';

import './styles.scss';

export type ItemProps = {
  id: string;
  nickname: string;
  followers: number;
  followersOverview: number;
  type: string;
  status: boolean;
}

export type OverviewProps = {
  id: string;
  title: string;
  total: string;
  percent: string;
  type: string;
  status: boolean;
}

export function Dashboard() {
  const data: ItemProps[] = db;
  const dataOverview: OverviewProps[] = db_overview;

  return (
    <div id="dashboard-container">
      <Header />

      <div id="followers-container">
        {data.map(item => (
          <FollowersCard
            data={item}
            borderTheme={item.type}
            key={item.id}
          />
        ))
        }
      </div>

      <h2 id="overview">Overview - Today</h2>

      <div id="overview-container">
        {dataOverview.map(item => (
          <OverviewCard
            data={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}