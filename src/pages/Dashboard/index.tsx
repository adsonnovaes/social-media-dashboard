import { FollowersCard } from '../../components/FollowersCard';
import { Header } from '../../components/Header';

import db from '../../data/dataFake.json';

import './styles.scss';

export type ItemProps = {
  id: string;
  nickname: string;
  followers: number;
  followersOverview: number;
  type: string;
  status: boolean;
}

export function Dashboard() {
  const data: ItemProps[] = db;

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
    </div>
  );
}