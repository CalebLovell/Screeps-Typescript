import harvest from 'roles/harvest';
import upgrade from 'roles/upgrade';

const runCreeps = (originRoomName: string) => {
	const roomCreeps: Creep[] = _.filter(Game.creeps, x => x.memory.originRoomName === originRoomName);

	for (let creep of roomCreeps) {
		switch (creep.memory.role) {
			case `harvester`:
				harvest(creep);
				break;
			case `upgrader`:
				upgrade(creep);
				break;
			default:
				throw new Error(`There was an Error running the creep: ${creep.name}.`);
		}
	}
};

export default runCreeps;
