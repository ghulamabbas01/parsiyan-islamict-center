import Container from "@/components/Container";
import React from "react";
import { useRouter } from "next/router";

const eightMonth = () => {
  const router = useRouter();
  return (
    <div className="pt-[120px] mb-10 ">
      <Container>
        <div className="flex justify-between my-5 items-center">
          <div className="font-bold text-3xl">August, 2023 | Muharram</div>
          <div className="font-bold text-3xl">
            <button
              className="bg-green-600 p-2 text-white rounded-md "
              onClick={() => router.push("/nineMonth")}
            >
              Next Month
            </button>
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
              <td>Tue </td>
              <td>4:51AM </td>
              <td>5:20AM </td>
              <td>6:11AM </td>
              <td>1:18PM </td>
              <td>1:30PM </td>
              <td>5:04PM </td>
              <td>5:15PM </td>
              <td>8:17PM </td>
              <td>8:22PM </td>
              <td>9:39PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Wed </td>
              <td>4:52AM </td>
              <td>5:20AM </td>
              <td>6:12AM </td>
              <td>1:18PM </td>
              <td>1:30PM </td>
              <td>5:04PM </td>
              <td>5:15PM </td>
              <td>8:16PM </td>
              <td>8:21PM </td>
              <td>9:38PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Thu </td>
              <td>4:53AM </td>
              <td>5:20AM </td>
              <td>6:13AM </td>
              <td>1:18PM </td>
              <td>1:30PM </td>
              <td>5:04PM </td>
              <td>5:15PM </td>
              <td>8:15PM </td>
              <td>8:20PM </td>
              <td>9:36PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Fri </td>
              <td>4:54AM </td>
              <td>5:20AM </td>
              <td>6:14AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>5:03PM </td>
              <td>5:15PM </td>
              <td>8:14PM </td>
              <td>8:19PM </td>
              <td>9:35PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Sat </td>
              <td>4:55AM </td>
              <td>5:20AM </td>
              <td>6:15AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>5:03PM </td>
              <td>5:15PM </td>
              <td>8:13PM </td>
              <td>8:18PM </td>
              <td>9:34PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>06</td>
              <td>Sun </td>
              <td>4:56AM </td>
              <td>5:20AM </td>
              <td>6:16AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>5:03PM </td>
              <td>5:15PM </td>
              <td>8:12PM </td>
              <td>8:17PM </td>
              <td>9:32PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>07</td>
              <td>Mon </td>
              <td>4:57AM </td>
              <td>5:20AM </td>
              <td>6:16AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>5:02PM </td>
              <td>5:15PM </td>
              <td>8:11PM </td>
              <td>8:16PM </td>
              <td>9:31PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>08</td>
              <td>Tue </td>
              <td>4:59AM </td>
              <td>5:20AM </td>
              <td>6:17AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>5:02PM </td>
              <td>5:15PM </td>
              <td>8:09PM </td>
              <td>8:14PM </td>
              <td>9:29PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>09</td>
              <td>Wed </td>
              <td>5:00AM </td>
              <td>5:20AM </td>
              <td>6:18AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>5:01PM </td>
              <td>5:15PM </td>
              <td>8:08PM </td>
              <td>8:13PM </td>
              <td>9:28PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Thu </td>
              <td>5:01AM </td>
              <td>5:20AM </td>
              <td>6:19AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>5:01PM </td>
              <td>5:15PM </td>
              <td>8:07PM </td>
              <td>8:12PM </td>
              <td>9:27PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Fri </td>
              <td>5:02AM </td>
              <td>5:20AM </td>
              <td>6:20AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>5:01PM </td>
              <td>5:15PM </td>
              <td>8:06PM </td>
              <td>8:11PM </td>
              <td>9:25PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Sat </td>
              <td>5:03AM </td>
              <td>5:30AM </td>
              <td>6:21AM </td>
              <td>1:16PM </td>
              <td>1:30PM </td>
              <td>5:00PM </td>
              <td>5:15PM </td>
              <td>8:05PM </td>
              <td>8:10PM </td>
              <td>9:24PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Sun </td>
              <td>5:04AM </td>
              <td>5:30AM </td>
              <td>6:22AM </td>
              <td>1:16PM </td>
              <td>1:30PM </td>
              <td>5:00PM </td>
              <td>5:15PM </td>
              <td>8:04PM </td>
              <td>8:09PM </td>
              <td>9:22PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Mon </td>
              <td>5:05AM </td>
              <td>5:30AM </td>
              <td>6:22AM </td>
              <td>1:16PM </td>
              <td>1:30PM </td>
              <td>4:59PM </td>
              <td>5:15PM </td>
              <td>8:02PM </td>
              <td>8:07PM </td>
              <td>9:21PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>15</td>
              <td>Tue </td>
              <td>5:06AM </td>
              <td>5:30AM </td>
              <td>6:23AM </td>
              <td>1:16PM </td>
              <td>1:30PM </td>
              <td>4:59PM </td>
              <td>5:15PM </td>
              <td>8:01PM </td>
              <td>8:06PM </td>
              <td>9:19PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Wed </td>
              <td>5:08AM </td>
              <td>5:30AM </td>
              <td>6:24AM </td>
              <td>1:16PM </td>
              <td>1:30PM </td>
              <td>4:58PM </td>
              <td>5:15PM </td>
              <td>8:00PM </td>
              <td>8:05PM </td>
              <td>9:18PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Thu </td>
              <td>5:09AM </td>
              <td>5:30AM </td>
              <td>6:25AM </td>
              <td>1:15PM </td>
              <td>1:30PM </td>
              <td>4:58PM </td>
              <td>5:15PM </td>
              <td>7:58PM </td>
              <td>8:03PM </td>
              <td>9:16PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Fri </td>
              <td>5:10AM </td>
              <td>5:30AM </td>
              <td>6:26AM </td>
              <td>1:15PM </td>
              <td>1:30PM </td>
              <td>4:57PM </td>
              <td>5:15PM </td>
              <td>7:57PM </td>
              <td>8:02PM </td>
              <td>9:15PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Sat </td>
              <td>5:11AM </td>
              <td>5:40AM </td>
              <td>6:27AM </td>
              <td>1:15PM </td>
              <td>1:30PM </td>
              <td>4:56PM </td>
              <td>5:15PM </td>
              <td>7:56PM </td>
              <td>8:01PM </td>
              <td>9:13PM </td>
              <td>9:30PM </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Sun </td>
              <td>5:12AM </td>
              <td>5:40AM </td>
              <td>6:27AM </td>
              <td>1:15PM </td>
              <td>1:30PM </td>
              <td>4:56PM </td>
              <td>5:15PM </td>
              <td>7:54PM </td>
              <td>7:59PM </td>
              <td>9:11PM </td>
              <td>9:30PM </td>
            </tr>
            <tr>
              <td>21</td>
              <td>Mon </td>
              <td>5:13AM </td>
              <td>5:40AM </td>
              <td>6:28AM </td>
              <td>1:15PM </td>
              <td>1:30PM </td>
              <td>4:55PM </td>
              <td>5:15PM </td>
              <td>7:53PM </td>
              <td>7:58PM </td>
              <td>9:10PM </td>
              <td>9:30PM </td>
            </tr>
            <tr>
              <td>22</td>
              <td>Tue </td>
              <td>5:14AM </td>
              <td>5:40AM </td>
              <td>6:29AM </td>
              <td>1:14PM </td>
              <td>1:30PM </td>
              <td>4:55PM </td>
              <td>5:15PM </td>
              <td>7:52PM </td>
              <td>7:57PM </td>
              <td>9:08PM </td>
              <td>9:30PM </td>
            </tr>
            <tr>
              <td>23</td>
              <td>Wed </td>
              <td>5:15AM </td>
              <td>5:40AM </td>
              <td>6:30AM </td>
              <td>1:14PM </td>
              <td>1:30PM </td>
              <td>4:54PM </td>
              <td>5:15PM </td>
              <td>7:50PM </td>
              <td>7:55PM </td>
              <td>9:07PM </td>
              <td>9:30PM </td>
            </tr>
            <tr>
              <td>24</td>
              <td>Thu </td>
              <td>5:16AM </td>
              <td>5:40AM </td>
              <td>6:31AM </td>
              <td>1:14PM </td>
              <td>1:30PM </td>
              <td>4:53PM </td>
              <td>5:15PM </td>
              <td>7:49PM </td>
              <td>7:54PM </td>
              <td>9:05PM </td>
              <td>9:30PM </td>
            </tr>
            <tr>
              <td>25</td>
              <td>Fri </td>
              <td>5:17AM </td>
              <td>5:40AM </td>
              <td>6:32AM </td>
              <td>1:13PM </td>
              <td>1:30PM </td>
              <td>4:53PM </td>
              <td>5:15PM </td>
              <td>7:48PM </td>
              <td>7:53PM </td>
              <td>9:04PM </td>
              <td>9:30PM </td>
            </tr>
            <tr>
              <td>26</td>
              <td>Sat </td>
              <td>5:18AM </td>
              <td>5:50AM </td>
              <td>6:33AM </td>
              <td>1:13PM </td>
              <td>1:30PM </td>
              <td>4:52PM </td>
              <td>5:15PM </td>
              <td>7:46PM </td>
              <td>7:51PM </td>
              <td>9:02PM </td>
              <td>9:20PM </td>
            </tr>
            <tr>
              <td>27</td>
              <td>Sun </td>
              <td>5:20AM </td>
              <td>5:50AM </td>
              <td>6:33AM </td>
              <td>1:13PM </td>
              <td>1:30PM </td>
              <td>4:51PM </td>
              <td>5:15PM </td>
              <td>7:45PM </td>
              <td>7:50PM </td>
              <td>9:00PM </td>
              <td>9:20PM </td>
            </tr>
            <tr>
              <td>28</td>
              <td>Mon </td>
              <td>5:21AM </td>
              <td>5:50AM </td>
              <td>6:34AM </td>
              <td>1:13PM </td>
              <td>1:30PM </td>
              <td>4:50PM </td>
              <td>5:15PM </td>
              <td>7:43PM </td>
              <td>7:48PM </td>
              <td>8:59PM </td>
              <td>9:20PM </td>
            </tr>
            <tr>
              <td>29</td>
              <td>Tue </td>
              <td>5:22AM </td>
              <td>5:50AM </td>
              <td>6:35AM </td>
              <td>1:12PM </td>
              <td>1:30PM </td>
              <td>4:50PM </td>
              <td>5:15PM </td>
              <td>7:42PM </td>
              <td>7:47PM </td>
              <td>8:57PM </td>
              <td>9:20PM </td>
            </tr>
            <tr>
              <td>30</td>
              <td>Wed </td>
              <td>5:23AM </td>
              <td>5:50AM </td>
              <td>6:36AM </td>
              <td>1:12PM </td>
              <td>1:30PM </td>
              <td>4:49PM </td>
              <td>5:15PM </td>
              <td>7:40PM </td>
              <td>7:45PM </td>
              <td>8:55PM </td>
              <td>9:20PM </td>
            </tr>
            <tr>
              <td>31</td>
              <td>Thu </td>
              <td>5:24AM </td>
              <td>5:50AM </td>
              <td>6:37AM </td>
              <td>1:12PM </td>
              <td>1:30PM </td>
              <td>4:48PM </td>
              <td>5:15PM </td>
              <td>7:39PM </td>
              <td>7:44PM </td>
              <td>8:54PM </td>
              <td>9:20PM </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default eightMonth;
