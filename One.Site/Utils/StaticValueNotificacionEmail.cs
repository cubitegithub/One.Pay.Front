namespace One.Site.Utils
{
    public static class StaticValueNotificacionEmail
    {


        public static string ApiUrl { get; private set; }
        public static string ServerAddressMailAlias { get; private set; }
        public static string ServerAddresName { get; private set; }     
        
        public static string NotificacionInicioSession_Asunto { get; private set; }
        public static string NotificacionInicioSession_Cuerpo { get; private set; }
        
        public static string NotificacionEditarSolicitud_Asunto { get; private set; }
        public static string NotificacionEditarSolicitud_Cuerpo { get; private set; }


        #region OTP 
        public static string NotificacionOTP_Asunto { get; private set; }
        public static string NotificacionOTP_Cuerpo { get; private set; }

        #endregion OTP

        #region OTP 
        public static string NotificacionCreditoBilleteraSolicitud_Asunto { get; private set; }
        public static string NotificacionCreditoBilleteraSolicitud_Cuerpo { get; private set; }

        #endregion OTP


        #region Notificacion RunTax  Creacion asignacionPaquete
        public static string ServerAddressMailAliasRunTax { get; private set; }
        public static string NotificacionRunTaxNuevo_Renovacion_Asunto { get; private set; }
        public static string NotificacionRunTaxNuevo_Renovacion_Cuerpo { get; private set; }

        #endregion  Notificacion RunTax  Creacion asignacionPaquete

        static StaticValueNotificacionEmail()
        {
            LoadConfiguration();
        }

        private static void LoadConfiguration()
        {
            try
            {
                var configBuilder = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory()) // Obtiene la ruta de la app
                    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                    .Build();

                ApiUrl = configBuilder["EmailApiNotificationSettings:ApiUrl"];
                ServerAddressMailAlias = configBuilder["EmailApiNotificationSettings:ServerAddressMailAlias"];
                ServerAddresName = configBuilder["EmailApiNotificationSettings:ServerAddresName"];

                NotificacionInicioSession_Asunto = configBuilder["EmailApiNotificationSettings:NotificacionInicioSession:Asunto"];
                NotificacionInicioSession_Cuerpo = configBuilder["EmailApiNotificationSettings:NotificacionInicioSession:Cuerpo"];

                NotificacionOTP_Asunto = configBuilder["EmailApiNotificationSettings:NotificacionOtp:Asunto"];
                NotificacionOTP_Cuerpo = configBuilder["EmailApiNotificationSettings:NotificacionOtp:Cuerpo"];

                NotificacionCreditoBilleteraSolicitud_Asunto = configBuilder["EmailApiNotificationSettings:NotificacionCreditoBilleteraSolicitud:Asunto"];
                NotificacionCreditoBilleteraSolicitud_Cuerpo = configBuilder["EmailApiNotificationSettings:NotificacionCreditoBilleteraSolicitud:Cuerpo"];

                ServerAddressMailAliasRunTax = configBuilder["EmailApiNotificationSettings:NotificacionRunTaxNuevo_Renovacion:ServerAddressMailAliasRunTax"];
                NotificacionRunTaxNuevo_Renovacion_Asunto = configBuilder["EmailApiNotificationSettings:NotificacionRunTaxNuevo_Renovacion:Asunto"];
                NotificacionRunTaxNuevo_Renovacion_Cuerpo = configBuilder["EmailApiNotificationSettings:NotificacionRunTaxNuevo_Renovacion:Cuerpo"];

                NotificacionEditarSolicitud_Asunto = configBuilder["EmailApiNotificationSettings:NotificacionEditarSolicitud:Asunto"];
                NotificacionEditarSolicitud_Cuerpo = configBuilder["EmailApiNotificationSettings:NotificacionEditarSolicitud:Cuerpo"];

            }
            catch (Exception ex)
            {
                
            }
        }
    }

}
