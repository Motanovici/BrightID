import * as action from '../index';

describe('actions', () => {
  it('should create an action to update the user trust score', () => {
    const trustScore = '99.9';
    expect(action.userTrustScore(trustScore)).toMatchSnapshot();
  });

  it('should create an action to update the trust score of a connection', () => {
    const publicKey = [];
    const trustScore = '88.6';
    expect(
      action.connectionTrustScore(publicKey, trustScore),
    ).toMatchSnapshot();
  });

  it('should create an action to set the group count', () => {
    const groupsCount = '15';
    expect(action.setGroupsCount(groupsCount)).toMatchSnapshot();
  });

  it('should create an action to set the search param', () => {
    const searchParam = 'gandolf';
    expect(action.setSearchParam(searchParam)).toMatchSnapshot();
  });

  it('should create an action to set the connections list', () => {
    const connections = [];
    expect(action.setConnections(connections)).toMatchSnapshot();
  });

  it('should create an action to add a connection', () => {
    const connection = {};
    expect(action.addConnection(connection)).toMatchSnapshot();
  });

  it('should create an action to set user data', () => {
    const userData = {
      publicKey: [],
      secretKey: [],
      nameornym: 'aragon',
      userAvatar: 'avatar string',
    };
    expect(action.setUserData(userData)).toMatchSnapshot();
  });

  it('should create an action to remove user data', () => {
    expect(action.removeUserData()).toMatchSnapshot();
  });

  it('should create an action to set user avatar', () => {
    const userAvatar = 'avatar string';
    expect(action.setUserAvatar(userAvatar)).toMatchSnapshot();
  });

  it('should create an action to set public key 1', () => {
    const publicKey2 = [];
    expect(action.setPublicKey2(publicKey2)).toMatchSnapshot();
  });

  it('should create an action to set public key 1', () => {
    const nearbyPeople = [];
    expect(action.refreshNearbyPeople(nearbyPeople)).toMatchSnapshot();
  });

  it('should create an action to set public key 1', () => {
    const errmsg = 'error message';
    expect(action.handleError(errmsg)).toMatchSnapshot();
  });
});
