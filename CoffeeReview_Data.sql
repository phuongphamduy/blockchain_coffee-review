USE [master]
GO
/****** Object:  Database [foodReview]    Script Date: 11/9/2023 12:38:21 PM ******/
CREATE DATABASE [foodReview]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'foodReview', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\foodReview.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'foodReview_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\foodReview_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [foodReview] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [foodReview].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [foodReview] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [foodReview] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [foodReview] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [foodReview] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [foodReview] SET ARITHABORT OFF 
GO
ALTER DATABASE [foodReview] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [foodReview] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [foodReview] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [foodReview] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [foodReview] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [foodReview] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [foodReview] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [foodReview] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [foodReview] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [foodReview] SET  ENABLE_BROKER 
GO
ALTER DATABASE [foodReview] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [foodReview] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [foodReview] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [foodReview] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [foodReview] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [foodReview] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [foodReview] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [foodReview] SET RECOVERY FULL 
GO
ALTER DATABASE [foodReview] SET  MULTI_USER 
GO
ALTER DATABASE [foodReview] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [foodReview] SET DB_CHAINING OFF 
GO
ALTER DATABASE [foodReview] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [foodReview] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [foodReview] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'foodReview', N'ON'
GO
ALTER DATABASE [foodReview] SET QUERY_STORE = OFF
GO
USE [foodReview]
GO
/****** Object:  Table [dbo].[Accounts]    Script Date: 11/9/2023 12:38:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accounts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Fullname] [nvarchar](255) NOT NULL,
	[Email] [varchar](255) NOT NULL,
	[Password] [varchar](255) NOT NULL,
	[Birthday] [date] NULL,
	[Phone] [varchar](10) NULL,
	[isBlock] [bit] NULL,
	[isAdmin] [bit] NOT NULL,
	[wallet] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Favorites]    Script Date: 11/9/2023 12:38:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Favorites](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Postname] [nvarchar](255) NOT NULL,
	[AccountId] [int] NOT NULL,
	[PostId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Follows]    Script Date: 11/9/2023 12:38:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Follows](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[followerId] [int] NOT NULL,
	[FollowingId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Images]    Script Date: 11/9/2023 12:38:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Images](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Url] [varchar](max) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[PostId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Interactions]    Script Date: 11/9/2023 12:38:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Interactions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[isLike] [bit] NOT NULL,
	[PostId] [int] NOT NULL,
	[AccountId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Posts]    Script Date: 11/9/2023 12:38:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Posts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Address] [nvarchar](255) NOT NULL,
	[Lat] [float] NOT NULL,
	[Lng] [float] NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[isConfirm] [bit] NOT NULL,
	[AccountId] [int] NOT NULL,
	[CreateDate] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reviews]    Script Date: 11/9/2023 12:38:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reviews](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Comment] [nvarchar](255) NOT NULL,
	[createdate] [date] NOT NULL,
	[Imageid] [int] NULL,
	[AccountId] [int] NOT NULL,
	[PostId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Accounts] ON 

INSERT [dbo].[Accounts] ([Id], [Fullname], [Email], [Password], [Birthday], [Phone], [isBlock], [isAdmin], [wallet]) VALUES (1, N'Phạm Duy Phương', N'thth1732003@gmail.com', N'123', CAST(N'2003-03-17' AS Date), N'0921413691', 0, 1, NULL)
INSERT [dbo].[Accounts] ([Id], [Fullname], [Email], [Password], [Birthday], [Phone], [isBlock], [isAdmin], [wallet]) VALUES (2, N'Phạm Duy Thanh', N'thanh@gmail.com', N'123', CAST(N'2003-03-18' AS Date), N'0921313691', 0, 1, NULL)
INSERT [dbo].[Accounts] ([Id], [Fullname], [Email], [Password], [Birthday], [Phone], [isBlock], [isAdmin], [wallet]) VALUES (3, N'truong', N'truong@gmail.com', N'123', CAST(N'2003-08-10' AS Date), N'0922251834', 0, 1, N'3AGXmc7vu1GW59foBMxxb46rr5GSB3zxnN9MSPatNgM2')
SET IDENTITY_INSERT [dbo].[Accounts] OFF
GO
SET IDENTITY_INSERT [dbo].[Favorites] ON 

INSERT [dbo].[Favorites] ([Id], [Postname], [AccountId], [PostId]) VALUES (1, N'📍 𝐇𝐈̉𝐍 𝐂𝐎𝐅𝐅𝐄𝐄', 3, 4)
SET IDENTITY_INSERT [dbo].[Favorites] OFF
GO
SET IDENTITY_INSERT [dbo].[Follows] ON 

INSERT [dbo].[Follows] ([Id], [followerId], [FollowingId]) VALUES (3, 1, 2)
INSERT [dbo].[Follows] ([Id], [followerId], [FollowingId]) VALUES (4, 2, 3)
INSERT [dbo].[Follows] ([Id], [followerId], [FollowingId]) VALUES (5, 3, 2)
INSERT [dbo].[Follows] ([Id], [followerId], [FollowingId]) VALUES (32, 1, 3)
INSERT [dbo].[Follows] ([Id], [followerId], [FollowingId]) VALUES (33, 3, 1)
SET IDENTITY_INSERT [dbo].[Follows] OFF
GO
SET IDENTITY_INSERT [dbo].[Images] ON 

INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (8, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F1.jpgcced712d-9e42-4bdc-b322-fa4620c88f71?alt=media&token=5be14df8-8e59-4fda-a87c-7d42ed32e34c', N'1.jpgcced712d-9e42-4bdc-b322-fa4620c88f71', 2)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (9, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F2.jpg09fffbd6-21fa-4cfd-9146-04475e8779f1?alt=media&token=48c71d51-61ba-47e6-8533-93db3cd0c73b', N'2.jpg09fffbd6-21fa-4cfd-9146-04475e8779f1', 2)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (10, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F3.jpg957fed00-765c-4444-a4af-f3efcc3dc019?alt=media&token=911e8049-f9ff-4f48-9868-0fb48895063e', N'3.jpg957fed00-765c-4444-a4af-f3efcc3dc019', 2)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (11, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F4.jpgb10a534a-bad4-4236-8fb0-b28ce4e4cd09?alt=media&token=1b4bb40b-e40f-4edd-94aa-df52e5b6ed1d', N'4.jpgb10a534a-bad4-4236-8fb0-b28ce4e4cd09', 2)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (12, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F5.jpg406447a0-f350-4757-98ae-94e45afd7ef1?alt=media&token=d7ef50dc-e401-4c11-868d-2b1cbee9aa03', N'5.jpg406447a0-f350-4757-98ae-94e45afd7ef1', 2)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (13, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F6.jpg48f8140d-4ec2-4282-8240-6e22f51a28c5?alt=media&token=1a38db57-e06e-41df-9d68-c13c3731ded9', N'6.jpg48f8140d-4ec2-4282-8240-6e22f51a28c5', 2)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (14, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F7.jpgb5b63fd5-1b09-4664-b8f0-cb1f8ba98568?alt=media&token=2e0c1c04-b708-4705-a468-5251f6ec8752', N'7.jpgb5b63fd5-1b09-4664-b8f0-cb1f8ba98568', 2)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (15, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F8.jpg8dfca351-1bbc-4af5-a29e-3c2f7ce5cf08?alt=media&token=857b4f63-d2cf-4e2b-8205-d927e8d0057f', N'8.jpg8dfca351-1bbc-4af5-a29e-3c2f7ce5cf08', 3)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (16, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F9.jpg36c5a155-2514-43be-a3b7-402199dfb5e6?alt=media&token=9110023a-62b8-4d2c-af7c-bdbb9d16d1d5', N'9.jpg36c5a155-2514-43be-a3b7-402199dfb5e6', 3)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (17, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F10.jpg4b3d6c25-8a36-4527-8d91-a3797f9f1024?alt=media&token=42b86498-16e6-4bf3-b8c6-41b57dd2ae5f', N'10.jpg4b3d6c25-8a36-4527-8d91-a3797f9f1024', 3)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (18, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F11.jpg21a26b84-e105-4614-a740-7694f9507d86?alt=media&token=1ed41da9-10ad-4a79-9017-4f7f1ca2fb52', N'11.jpg21a26b84-e105-4614-a740-7694f9507d86', 3)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (19, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F12.jpg563a598e-4cd9-403a-acbb-1c12d229866e?alt=media&token=2b0f7aaf-5c17-4800-bdde-867b6016e29a', N'12.jpg563a598e-4cd9-403a-acbb-1c12d229866e', 3)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (20, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F13.jpg5a7f404c-13c8-46d2-bab1-fb6d682f0d59?alt=media&token=f742ee57-6bfc-4150-8b58-84f9c5b2c37f', N'13.jpg5a7f404c-13c8-46d2-bab1-fb6d682f0d59', 3)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (21, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2Flaviet.jpg3857a406-e8d4-4d3b-a7fe-97f8c54e54d7?alt=media&token=191f0eb5-1538-47c2-9689-06ecee7de3f0', N'laviet.jpg3857a406-e8d4-4d3b-a7fe-97f8c54e54d7', 3)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (22, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F14.jpg78fce7b3-9b45-4d16-b867-052b38cd408b?alt=media&token=ffc4fec4-f214-414a-8f7b-4eb5b17996d9', N'14.jpg78fce7b3-9b45-4d16-b867-052b38cd408b', 4)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (23, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F15.jpg0a3a6506-1e2a-4f78-96c1-a0bdb01f36bc?alt=media&token=9b9af628-6b1d-462f-b22c-a59ac87dd4dc', N'15.jpg0a3a6506-1e2a-4f78-96c1-a0bdb01f36bc', 4)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (24, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F16.jpge5ac7086-5710-4d6f-9261-a5df1ea82cce?alt=media&token=aeba117e-f759-4714-a5e7-5645e3e531bd', N'16.jpge5ac7086-5710-4d6f-9261-a5df1ea82cce', 4)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (25, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F17.jpg9ca7024e-9492-4c91-bd9e-f124ee1827c6?alt=media&token=73d6de75-e8ea-478b-aa20-72d08045a1b1', N'17.jpg9ca7024e-9492-4c91-bd9e-f124ee1827c6', 4)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (26, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F18.jpgc1c05cd7-3ad9-4410-b28b-c677908499e3?alt=media&token=cc5d2a4c-7999-48ef-b43c-7abe23d12c30', N'18.jpgc1c05cd7-3ad9-4410-b28b-c677908499e3', 4)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (27, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F19.jpg60a62d0e-ce54-46b4-b014-8b8d8645648d?alt=media&token=b969b3ba-876d-4f4b-ae78-b0b34232bbbd', N'19.jpg60a62d0e-ce54-46b4-b014-8b8d8645648d', 4)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (28, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F20.jpg73966264-50d0-453d-afee-808acefc0379?alt=media&token=f32d5181-9283-4196-b616-da60b9ec6251', N'20.jpg73966264-50d0-453d-afee-808acefc0379', 4)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (29, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F21.jpgcfd7a2d3-f714-413b-899f-22a35ab08589?alt=media&token=6c2911f1-69b4-4af8-8dd8-e55dbc906ebb', N'21.jpgcfd7a2d3-f714-413b-899f-22a35ab08589', 5)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (30, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F22.jpgb0e51d91-6af5-4ad0-bad4-0d480a9216f1?alt=media&token=2c5fdd6c-2d2b-4758-bd43-c6709e538353', N'22.jpgb0e51d91-6af5-4ad0-bad4-0d480a9216f1', 5)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (31, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F23.jpgafde63ee-b208-438e-a4b7-203766196e0b?alt=media&token=c00fb643-c4c5-4a25-bd37-24350760d278', N'23.jpgafde63ee-b208-438e-a4b7-203766196e0b', 5)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (32, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F24.jpg61008a8c-cd81-438b-820d-2c22a7f46ae8?alt=media&token=88d79157-ad6d-4da3-80ce-f7e89e65b12c', N'24.jpg61008a8c-cd81-438b-820d-2c22a7f46ae8', 5)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (33, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F25.jpgca9a54bc-bda1-49af-978b-2a8de45b0fa1?alt=media&token=ad12a1c6-82ac-4142-9054-a955ac84692d', N'25.jpgca9a54bc-bda1-49af-978b-2a8de45b0fa1', 5)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (34, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F26.jpgf655bb75-0a6e-462e-a7c7-246033d13ed7?alt=media&token=c38b643c-ea16-4874-8397-dd60b0f57b99', N'26.jpgf655bb75-0a6e-462e-a7c7-246033d13ed7', 5)
INSERT [dbo].[Images] ([Id], [Url], [Name], [PostId]) VALUES (35, N'https://firebasestorage.googleapis.com/v0/b/foodreview-2c772.appspot.com/o/images%2F27.jpg91711c2f-6f22-427e-b03e-ef8fce18c648?alt=media&token=be32f0d8-93ed-4c3d-b333-934e11b3e06c', N'27.jpg91711c2f-6f22-427e-b03e-ef8fce18c648', 5)
SET IDENTITY_INSERT [dbo].[Images] OFF
GO
SET IDENTITY_INSERT [dbo].[Interactions] ON 

INSERT [dbo].[Interactions] ([Id], [isLike], [PostId], [AccountId]) VALUES (1, 1, 4, 3)
SET IDENTITY_INSERT [dbo].[Interactions] OFF
GO
SET IDENTITY_INSERT [dbo].[Posts] ON 

INSERT [dbo].[Posts] ([Id], [Name], [Address], [Lat], [Lng], [Description], [isConfirm], [AccountId], [CreateDate]) VALUES (2, N'Blue Dream Bread', N'67B Đinh Công Tráng, Tân Định, Quận 1, Hồ Chí Minh', 10.788957165000056, 106.69151685000009, N'Vừa phát hiện tiệm bánh decor Noel với concept tựa như căn nhà châu âu xinh xắn ngay tại Q1 ☕️❄️✨
✌Follow mình trên IG: "@quizxtran" để biết thêm nhiều quán cafe xinh nha.
" Blue Dream Bread "
Tiệm decor xmas trong quán xinh xỉu theo phong cách châu âu có 2 tầng lầu với tone màu nâu gỗ kết hợp cùng cây thông, đèn chiếu lung linh, khăn bàn sọc đỏ, các món decor noel làm cho tổng thể quán thêm phần ấm cúng hơn như một căn nhà trong cổ tích vậy. Ghé tiệm là phải ăn bánh cinnamon roll, crossaint, brownie rồi order thêm ly cafe, ly chocolate nóng thì chuẩn combo đón xmas lun ☕️😋🥰
Mọi người nên booking bàn sớm để có chỗ ngồi & có hình chụp xink nhoa vì quán hiện tại đang hot sẽ hay bị full bàn á.
*Đ/c: 67B Đinh Công Tráng, Tân Định - Q.1 - TP.HCM
*Thời gian: 9h - 21h (T2 - CN)
*Giá: chỉ từ 45k++/nước, có cả bánh
P/s: Giữ xe theo chỉ dẫn bảng của quán. Vui lòng hỏi nhân viên để biết thêm chỗ giữ xe.', 1, 3, CAST(N'2023-08-05' AS Date))
INSERT [dbo].[Posts] ([Id], [Name], [Address], [Lat], [Lng], [Description], [isConfirm], [AccountId], [CreateDate]) VALUES (3, N'SWEET SOONG 🌸🌼🌳', N'187 Nguyễn Văn Hưởng, Thảo Điền, Thủ Đức, Hồ Chí Minh', 10.816527443000041, 106.72824864900008, N'SWEET SOONG 🌸🌼🌳
Một nhà hàng cà phê xinh xắn ở Quận 2, Sài Gòn nhưng lại chưa được nhiều người biết đến. 
Nhà hàng có không gian mở, xung quanh được trồng rất nhiều cây cối xanh mát. Bao phủ khắp các lối đi là bông cẩm tú cầu, xinh lắm nè.
Điểm đặc biệt của nhà hàng là view sông Sài Gòn buổi chiều ngắm hoàng hôn rất là chill í.
Ở đây còn có nhiều hoạt động trải nghiệm vui vẻ như tô tượng, bắn cung, ngâm chân, xông hơi nữa. Nói chung là địa điểm rất tuyệt với để hẹn hò cùng gia đình và bạn bè. 
Sweet Soong ♥️🎼
🏡 187 Nguyễn Văn Hưởng, phường Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh
⏰ Thời gian: 7.00 đến 22.00 (T2 - CN)
💰 Từ 55xu, gửi xe free', 1, 3, CAST(N'2023-04-30' AS Date))
INSERT [dbo].[Posts] ([Id], [Name], [Address], [Lat], [Lng], [Description], [isConfirm], [AccountId], [CreateDate]) VALUES (4, N'📍 𝐇𝐈̉𝐍 𝐂𝐎𝐅𝐅𝐄𝐄', N'Biệt thự Cao cấp An Sương, Đường DN6, Tân Hưng Thuận, Quận 12, Hồ Chí Minh', 10.844095324000023, 106.62444953800008, N'🎄Giáng sinh lung linh trong toà lâu đài châu Âu chỉ 25ka 
📍 𝐇𝐈̉𝐍 𝐂𝐎𝐅𝐅𝐄𝐄
🏠 32F6- Đường DN6- Khu Dân Cư An Sương - P Tân Hưng Thuận, Q. 12, Tp HCM
⏰ 7:00-22:30 
💰25ka-55ka
Quán siêu rộng lớn và thoáng mát gồm 4 tầng lầu mà mỗi tầng là một concept khác nhau với vô vàn góc sống ảo. Từ cổng vào đã thấy ngập tràn không khí giáng sinh với tone đỏ và vàng nổi bật rất là lung linh luôn nha. Chụp ảnh ,quay phim , thay 77-49 bộ đồ phờ ri lun nên chắc đến đây là có ảnh xịn mang về rồi nè. 
Đồ uống thì cực kì đa dạng với nhiều món nước có cả ăn vặt luôn mà chỉ từ 25ka. Mình thấy decor món mang ra khá là chỉnh chu và uống cũng rất ổn áp luôn á
Các bạn nhân viên dễ thương và nhiệt tình
Lên đồ đi chụp noel liền thôi nào mn ', 1, 3, CAST(N'2023-01-05' AS Date))
INSERT [dbo].[Posts] ([Id], [Name], [Address], [Lat], [Lng], [Description], [isConfirm], [AccountId], [CreateDate]) VALUES (5, N'Trên Tầng Thượng', N'Quỳnh Hoa Quán, 540, 540/19 Đ. Cách Mạng Tháng 8, Phường 11, Quận 3, Hồ Chí Minh 70000', 10.7864453, 106.6675917, N'bên trên tầng thượng, 
Khúc tìm đường đi vô cũng hơi lú chút xíu nhưng loay hoay hồi cũng được mấy chú xung quanh chỉ cho, không bảng hiệu, không hướng dẫn, cứ đúng địa chỉ đó rồi đi vào là thấy cầu thang bước lên nha, 
Một không gian tách biệt hoàn toàn mà chắc chắn cũng không ai nghĩ sẽ có 1 quán cafe rộng lớn ở đấy đâu, nằm hoàn toàn trên tầng thượng của một toà nhà cũ kỹ, một không gian được đầu tư vào quá đẹp tựa Đà Lạt giữa Sài Gòn vậy, nền trải đầy sỏi, những nhà gỗ cũng nhưng cây xanh ở xung quanh, tạo nên cảm giác rất dễ chịu, tuy nhiên buổi trưa sẽ khá nóng nha, nên đi vào sáng sớm hoặc chiều tối thì sẽ chill hơn nè,
Về menu thì mình thấy cũng đa dạng, tầm giá khá cao, vị ổn áp so với khẩu vị của mình, ngoài ra còn có brunch và tối còn có bán cả cocktails nữa, tới hết tháng 5 là soft openning nên sẽ giảm 20% tổng bill nha, 
Trên Tầng Thượng
📍540/19 Cách Mạng Tháng 8, P11, Q3
⏰ 7h-23h30 
💵 Từ 60ca 
📸 Follow IG & Tiktok @hifasne để xem thêm 🎈', 1, 3, CAST(N'2023-02-09' AS Date))
SET IDENTITY_INSERT [dbo].[Posts] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Accounts__A9D10534D9D61726]    Script Date: 11/9/2023 12:38:21 PM ******/
ALTER TABLE [dbo].[Accounts] ADD UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Accounts] ADD  DEFAULT ((0)) FOR [isBlock]
GO
ALTER TABLE [dbo].[Favorites]  WITH CHECK ADD FOREIGN KEY([AccountId])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Favorites]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
GO
ALTER TABLE [dbo].[Follows]  WITH CHECK ADD FOREIGN KEY([followerId])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Follows]  WITH CHECK ADD FOREIGN KEY([FollowingId])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Images]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Interactions]  WITH CHECK ADD FOREIGN KEY([AccountId])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Interactions]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD FOREIGN KEY([AccountId])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Reviews]  WITH CHECK ADD FOREIGN KEY([AccountId])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Reviews]  WITH CHECK ADD FOREIGN KEY([Imageid])
REFERENCES [dbo].[Images] ([Id])
GO
ALTER TABLE [dbo].[Reviews]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
GO
USE [master]
GO
ALTER DATABASE [foodReview] SET  READ_WRITE 
GO
