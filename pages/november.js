import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const elevenMonth = () => {
  return (
    <div className="pt-[120px] mb-10 ">
      <Container>
        <div className="flex justify-between my-5 items-center">
          <div className="font-bold text-3xl">
            November, 2023 | Rabi Al-Thani
          </div>
          <div className="font-bold text-3xl">
            <Link
              href="/december"
              className="bg-green-600 p-2 text-white rounded-md "
            >
              Next Month
            </Link>
          </div>
        </div>
        <table class="bg-green-100 " border="1">
          <thead>
            <tr class="text-center bg-green-600 text-white">
              <th>Jun</th>
              <th>Day</th>
              <th>Fajr</th>
              <th>Fajr Iqamah</th>
              <th>Sunrise</th>
              <th>Zuhr</th>
              <th>Zuhr Iqamah</th>
              <th>Asr</th>
              <th>Asr Iqamah</th>
              <th>Maghrib</th>
              <th>Maghrib Iqamah</th>
              <th>Isha</th>
              <th>Isha Iqamah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Wed </td>
              <td>6:21AM </td>
              <td>6:30AM </td>
              <td>7:33AM </td>
              <td>12:55PM </td>
              <td>1:30PM </td>
              <td>3:46PM </td>
              <td>4:00PM </td>
              <td>6:11PM </td>
              <td>6:16PM </td>
              <td>7:23PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Thu </td>
              <td>6:22AM </td>
              <td>6:30AM </td>
              <td>7:34AM </td>
              <td>12:55PM </td>
              <td>1:30PM </td>
              <td>3:46PM </td>
              <td>4:00PM </td>
              <td>6:10PM </td>
              <td>6:15PM </td>
              <td>7:22PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Fri </td>
              <td>6:23AM </td>
              <td>6:30AM </td>
              <td>7:35AM </td>
              <td>12:55PM </td>
              <td>1:30PM </td>
              <td>3:45PM </td>
              <td>4:00PM </td>
              <td>6:09PM </td>
              <td>6:14PM </td>
              <td>7:21PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Sat </td>
              <td>6:24AM </td>
              <td>6:30AM </td>
              <td>7:36AM </td>
              <td>12:55PM </td>
              <td>1:30PM </td>
              <td>3:44PM </td>
              <td>4:00PM </td>
              <td>6:08PM </td>
              <td>6:13PM </td>
              <td>7:20PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Sun </td>
              <td>5:25AM </td>
              <td>5:50AM </td>
              <td>6:37AM </td>
              <td>11:55AM </td>
              <td>12:35PM </td>
              <td>2:43PM </td>
              <td>3:00PM </td>
              <td>5:07PM </td>
              <td>5:12PM </td>
              <td>6:19PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>06</td>
              <td>Mon </td>
              <td>5:26AM </td>
              <td>5:50AM </td>
              <td>6:38AM </td>
              <td>11:55AM </td>
              <td>12:35PM </td>
              <td>2:42PM </td>
              <td>3:00PM </td>
              <td>5:06PM </td>
              <td>5:11PM </td>
              <td>6:18PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>07</td>
              <td>Tue </td>
              <td>5:27AM </td>
              <td>5:50AM </td>
              <td>6:39AM </td>
              <td>11:55AM </td>
              <td>12:35PM </td>
              <td>2:42PM </td>
              <td>3:00PM </td>
              <td>5:05PM </td>
              <td>5:10PM </td>
              <td>6:17PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>08</td>
              <td>Wed </td>
              <td>5:28AM </td>
              <td>5:50AM </td>
              <td>6:40AM </td>
              <td>11:55AM </td>
              <td>12:35PM </td>
              <td>2:41PM </td>
              <td>3:00PM </td>
              <td>5:04PM </td>
              <td>5:09PM </td>
              <td>6:17PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>09</td>
              <td>Thu </td>
              <td>5:28AM </td>
              <td>5:50AM </td>
              <td>6:41AM </td>
              <td>11:55AM </td>
              <td>12:35PM </td>
              <td>2:40PM </td>
              <td>3:00PM </td>
              <td>5:04PM </td>
              <td>5:09PM </td>
              <td>6:16PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Fri </td>
              <td>5:29AM </td>
              <td>5:50AM </td>
              <td>6:42AM </td>
              <td>11:55AM </td>
              <td>12:35PM </td>
              <td>2:40PM </td>
              <td>3:00PM </td>
              <td>5:03PM </td>
              <td>5:08PM </td>
              <td>6:15PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Sat </td>
              <td>5:30AM </td>
              <td>6:00AM </td>
              <td>6:43AM </td>
              <td>11:55AM </td>
              <td>12:35PM </td>
              <td>2:39PM </td>
              <td>3:00PM </td>
              <td>5:02PM </td>
              <td>5:07PM </td>
              <td>6:15PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Sun </td>
              <td>5:31AM </td>
              <td>6:00AM </td>
              <td>6:44AM </td>
              <td>11:56AM </td>
              <td>12:35PM </td>
              <td>2:38PM </td>
              <td>3:00PM </td>
              <td>5:01PM </td>
              <td>5:06PM </td>
              <td>6:14PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Mon </td>
              <td>5:32AM </td>
              <td>6:00AM </td>
              <td>6:45AM </td>
              <td>11:56AM </td>
              <td>12:35PM </td>
              <td>2:38PM </td>
              <td>3:00PM </td>
              <td>5:00PM </td>
              <td>5:05PM </td>
              <td>6:13PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Tue </td>
              <td>5:33AM </td>
              <td>6:00AM </td>
              <td>6:46AM </td>
              <td>11:56AM </td>
              <td>12:35PM </td>
              <td>2:37PM </td>
              <td>3:00PM </td>
              <td>5:00PM </td>
              <td>5:05PM </td>
              <td>6:13PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>15</td>
              <td>Wed </td>
              <td>5:34AM </td>
              <td>6:00AM </td>
              <td>6:47AM </td>
              <td>11:56AM </td>
              <td>12:35PM </td>
              <td>2:37PM </td>
              <td>3:00PM </td>
              <td>4:59PM </td>
              <td>5:04PM </td>
              <td>6:12PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Thu </td>
              <td>5:35AM </td>
              <td>6:00AM </td>
              <td>6:49AM </td>
              <td>11:56AM </td>
              <td>12:35PM </td>
              <td>2:36PM </td>
              <td>3:00PM </td>
              <td>4:58PM </td>
              <td>5:03PM </td>
              <td>6:12PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Fri </td>
              <td>5:36AM </td>
              <td>6:00AM </td>
              <td>6:50AM </td>
              <td>11:56AM </td>
              <td>12:35PM </td>
              <td>2:36PM </td>
              <td>3:00PM </td>
              <td>4:58PM </td>
              <td>5:03PM </td>
              <td>6:11PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Sat </td>
              <td>5:37AM </td>
              <td>6:00AM </td>
              <td>6:51AM </td>
              <td>11:57AM </td>
              <td>12:35PM </td>
              <td>2:35PM </td>
              <td>3:00PM </td>
              <td>4:57PM </td>
              <td>5:02PM </td>
              <td>6:11PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Sun </td>
              <td>5:38AM </td>
              <td>6:00AM </td>
              <td>6:52AM </td>
              <td>11:57AM </td>
              <td>12:35PM </td>
              <td>2:35PM </td>
              <td>3:00PM </td>
              <td>4:57PM </td>
              <td>5:02PM </td>
              <td>6:10PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Mon </td>
              <td>5:38AM </td>
              <td>6:00AM </td>
              <td>6:53AM </td>
              <td>11:57AM </td>
              <td>12:35PM </td>
              <td>2:35PM </td>
              <td>3:00PM </td>
              <td>4:56PM </td>
              <td>5:01PM </td>
              <td>6:10PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>21</td>
              <td>Tue </td>
              <td>5:39AM </td>
              <td>6:00AM </td>
              <td>6:54AM </td>
              <td>11:57AM </td>
              <td>12:35PM </td>
              <td>2:34PM </td>
              <td>3:00PM </td>
              <td>4:56PM </td>
              <td>5:01PM </td>
              <td>6:09PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>22</td>
              <td>Wed </td>
              <td>5:40AM </td>
              <td>6:00AM </td>
              <td>6:55AM </td>
              <td>11:58AM </td>
              <td>12:35PM </td>
              <td>2:34PM </td>
              <td>3:00PM </td>
              <td>4:55PM </td>
              <td>5:00PM </td>
              <td>6:09PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>23</td>
              <td>Thu </td>
              <td>5:41AM </td>
              <td>6:00AM </td>
              <td>6:56AM </td>
              <td>11:58AM </td>
              <td>12:35PM </td>
              <td>2:33PM </td>
              <td>3:00PM </td>
              <td>4:55PM </td>
              <td>5:00PM </td>
              <td>6:09PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>24</td>
              <td>Fri </td>
              <td>5:42AM </td>
              <td>6:00AM </td>
              <td>6:57AM </td>
              <td>11:58AM </td>
              <td>12:35PM </td>
              <td>2:33PM </td>
              <td>3:00PM </td>
              <td>4:54PM </td>
              <td>4:59PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>25</td>
              <td>Sat </td>
              <td>5:43AM </td>
              <td>6:10AM </td>
              <td>6:58AM </td>
              <td>11:59AM </td>
              <td>12:35PM </td>
              <td>2:33PM </td>
              <td>3:00PM </td>
              <td>4:54PM </td>
              <td>4:59PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>26</td>
              <td>Sun </td>
              <td>5:44AM </td>
              <td>6:10AM </td>
              <td>6:59AM </td>
              <td>11:59AM </td>
              <td>12:35PM </td>
              <td>2:33PM </td>
              <td>3:00PM </td>
              <td>4:54PM </td>
              <td>4:59PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>27</td>
              <td>Mon </td>
              <td>5:45AM </td>
              <td>6:10AM </td>
              <td>7:00AM </td>
              <td>11:59AM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>28</td>
              <td>Tue </td>
              <td>5:45AM </td>
              <td>6:10AM </td>
              <td>7:01AM </td>
              <td>12:00PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>29</td>
              <td>Wed </td>
              <td>5:46AM </td>
              <td>6:10AM </td>
              <td>7:02AM </td>
              <td>12:00PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>30</td>
              <td>Thu </td>
              <td>5:47AM </td>
              <td>6:10AM </td>
              <td>7:03AM </td>
              <td>12:00PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:07PM </td>
              <td>8:00PM </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default elevenMonth;
