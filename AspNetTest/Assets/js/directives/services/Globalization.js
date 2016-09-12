
angular.module('otherApp')
.factory('Globalization', function () {
    var Globalization = {
        //this is for routing
        globalizationTranslationMainNav: [{id: 1, language: [{ id: 1, translation: 'Home' },
                                                     { id: 2, translation: 'ホーム' }], path: '/Home', show: true
        },
                                          {
                                              id: 2, language: [{ id: 1, translation: 'News' },
                                                                { id: 2, translation: 'ログアウト' }], path: '/News', show: true
                                          },
                                          {
                                              id: 3, language: [{ id: 1, translation: 'About Us' },
                                                                { id: 2, translation: '私たちに関しては' }], path: '/AboutUs', show: true
                                          },
                                          {
                                              id: 4, language: [{ id: 1, translation: 'Admin Dashboard' },
                                                                { id: 2, translation: '管理ダッシュボード' }], path: '/AdminDashboard', show: true
                                          },
                                          {
                                              id: 5, language: [{ id: 1, translation: 'Contact Us' },
                                                                { id: 2, translation: 'お問い合わせ' }], path: '/ContactUs', show: true
                                          },
                                          {
                                              id: 6, language: [{ id: 1, translation: 'Log out' },
                                                                { id: 2, translation: 'ログアウト' }], path: '/Login', show: true
                                          }
        ],
        //this is for section
        adminNavBarItems: [{id: 1, language: [{ id: 1, translation: 'Inbox' },
                                                     { id: 2, translation: '受信トレイ' }], path: 'secInbox', show: true
                                              },
                                              {
                                                  id: 2, language: [{ id: 1, translation: 'Post A News' },
                                                                    { id: 2, translation: 'ポストAニュース' }], path: 'secNews', show: true
                                              },
                                              {
                                                  id: 3, language: [{ id: 1, translation: 'Concerns' },
                                                                    { id: 2, translation: '懸念' }], path: 'secConcern', show: true
                                              },
                                              {
                                                  id: 4, language: [{ id: 1, translation: 'Admin Tool Bar' },
                                                                    { id: 2, translation: '管理ツールバー' }], path: 'secAdminToolBar', show: true
                                              }
                          ],
    };
    return Globalization;
});