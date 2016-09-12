using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Manager;
using ClassLibraryRepository;
using Newtonsoft.Json;

namespace AspNetTest
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        #region database loading related stuff
        [WebMethod]
        public static void ListOfGlobalization() {
        }
        [WebMethod]
        public static List<News> ListOfNews() {
            NewsManager nm = new NewsManager();
            return nm.news;
        }
        [WebMethod]
        public static List<Inbox> ListOfInbox() {
            InboxManager inboxM = new InboxManager(1, 1);
            return inboxM.inbox;
        }
        [WebMethod]
        public static List<Concern> ListOfConcern() {
            ConcernManager cm = new ConcernManager();
            return cm.Concern;
        }
        [WebMethod]
        public static List<VerificationCode> ListOfVerificationCodes() {
            VerificationCodeManager vcm = new VerificationCodeManager();
            return vcm.codes;
        }
        [WebMethod]
        public static List<Images> ListOfSlideImages() {
            SlideManager sm = new SlideManager();
            return sm.images;
        }
        #endregion

        #region checking user credibility
        [WebMethod]
        public static UserProfile CheckUserExistence(string data) {
            var userLogin = JsonConvert.DeserializeObject<Users>(data);
            UserManager um = new UserManager();
            foreach (UserProfile temp in um.usersProfile) {
                if (userLogin.username == temp.username && userLogin.password == temp.password) {
                    return temp;
                }
            }
            return null;
        }
        #endregion

        #region database checking, verifying, adding, editing and deleting data from database
        [WebMethod]
        public static void VerifyUser(string userInput) {

        }
        [WebMethod]
        public static void AddNew(string data, int process) {
            switch (process) {
                case 1:
                    //this process is for adding new user from registration saves from database
                    break;
                case 3:
                    //do a database insertion from database here call a method from a class to insert data from registration of new users 
                    break;
                default:
                    break;
            }
        }
        [WebMethod]
        public static void UpdateData(string data, int process) {

        }
        [WebMethod]
        public static void DeleteItem(string data, int process) {

        }
        #endregion

    }
}