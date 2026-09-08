import { useMemo, useState, type FC } from "react";
import { ACTIVITIES } from "../../data/activities.data";
import { ActivityCard } from "../activity-card";
import { Button } from "../button";
import { Carrousel } from "../carrousel";

export const Tours: FC = function () {
  const [filter, setFilter] = useState<'experience' | 'hike' | 'all'>('all');

  const activities = useMemo(() =>
    filter === 'all'
      ? ACTIVITIES
      : ACTIVITIES.filter(activity => activity.type === filter)
    , [filter])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between">
        <span className="text-5xl font-semibold">Composez votre voyage</span>
        <div className="flex flex-row gap-5">
          <Button
            textColor={filter === 'all' ? 'white' : 'primary'}
            bgColor={filter === 'all' ? 'primary' : 'softGrey'}
            shape="pill"
            onClick={() => setFilter('all')}
          >
            Tout
          </Button>
          <Button
            textColor={filter === 'experience' ? 'white' : 'primary'}
            bgColor={filter === 'experience' ? 'primary' : 'softGrey'}
            shape="pill"
            onClick={() => setFilter('experience')}
          >
            Expériences
          </Button>
          <Button
            textColor={filter === 'hike' ? 'white' : 'primary'}
            bgColor={filter === 'hike' ? 'primary' : 'softGrey'}
            shape="pill"
            onClick={() => setFilter('hike')}
          >
            Randonnées
          </Button>
        </div>
      </div>

      <Carrousel items={activities} render={activity => <ActivityCard activity={activity} />} />
    </div>
  );
};