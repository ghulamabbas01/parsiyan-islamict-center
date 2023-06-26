import Container from "@/components/Container";
import React from "react";
import { useRouter } from "next/router";

const sixMonth = () => {
  const router = useRouter();
  return (
    <div className="pt-[120px] mb-10 ">
      <Container>
        <div className="flex justify-between my-5 items-center">
          <div className="font-bold text-3xl">June, 2023 | Dhul-Qadah</div>
          <div className="font-bold text-3xl">
            <button
              className="bg-green-600 p-2 text-white rounded-md "
              onClick={() => router.push("/sevenMonth")}
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
              <td>Thu </td>
              <td>4:21AM </td>
              <td>5:00AM </td>
              <td>5:48AM </td>
              <td>1:09PM </td>
              <td>1:30PM </td>
              <td>4:58PM </td>
              <td>5:15PM </td>
              <td>8:26PM </td>
              <td>8:31PM </td>
              <td>9:52PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Fri </td>
              <td>4:20AM </td>
              <td>5:00AM </td>
              <td>5:48AM </td>
              <td>1:09PM </td>
              <td>1:30PM </td>
              <td>4:59PM </td>
              <td>5:15PM </td>
              <td>8:27PM </td>
              <td>8:32PM </td>
              <td>9:53PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Sat </td>
              <td>4:19AM </td>
              <td>5:00AM </td>
              <td>5:48AM </td>
              <td>1:09PM </td>
              <td>1:30PM </td>
              <td>4:59PM </td>
              <td>5:15PM </td>
              <td>8:27PM </td>
              <td>8:32PM </td>
              <td>9:54PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Sun </td>
              <td>4:19AM </td>
              <td>5:00AM </td>
              <td>5:47AM </td>
              <td>1:10PM </td>
              <td>1:30PM </td>
              <td>4:59PM </td>
              <td>5:15PM </td>
              <td>8:28PM </td>
              <td>8:33PM </td>
              <td>9:54PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Mon </td>
              <td>4:19AM </td>
              <td>5:00AM </td>
              <td>5:47AM </td>
              <td>1:10PM </td>
              <td>1:30PM </td>
              <td>4:59PM </td>
              <td>5:15PM </td>
              <td>8:29PM </td>
              <td>8:34PM </td>
              <td>9:55PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>06</td>
              <td>Tue </td>
              <td>4:18AM </td>
              <td>5:00AM </td>
              <td>5:47AM </td>
              <td>1:10PM </td>
              <td>1:30PM </td>
              <td>5:00PM </td>
              <td>5:15PM </td>
              <td>8:29PM </td>
              <td>8:34PM </td>
              <td>9:56PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>07</td>
              <td>Wed </td>
              <td>4:18AM </td>
              <td>5:00AM </td>
              <td>5:47AM </td>
              <td>1:10PM </td>
              <td>1:30PM </td>
              <td>5:00PM </td>
              <td>5:15PM </td>
              <td>8:30PM </td>
              <td>8:35PM </td>
              <td>9:57PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>08</td>
              <td>Thu </td>
              <td>4:17AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:10PM </td>
              <td>1:30PM </td>
              <td>5:00PM </td>
              <td>5:15PM </td>
              <td>8:30PM </td>
              <td>8:35PM </td>
              <td>9:57PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>09</td>
              <td>Fri </td>
              <td>4:17AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:11PM </td>
              <td>1:30PM </td>
              <td>5:00PM </td>
              <td>5:15PM </td>
              <td>8:31PM </td>
              <td>8:36PM </td>
              <td>9:58PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sat </td>
              <td>4:17AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:11PM </td>
              <td>1:30PM </td>
              <td>5:00PM </td>
              <td>5:15PM </td>
              <td>8:31PM </td>
              <td>8:36PM </td>
              <td>9:59PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Sun </td>
              <td>4:17AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:11PM </td>
              <td>1:30PM </td>
              <td>5:01PM </td>
              <td>5:15PM </td>
              <td>8:32PM </td>
              <td>8:37PM </td>
              <td>9:59PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Mon </td>
              <td>4:16AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:11PM </td>
              <td>1:30PM </td>
              <td>5:01PM </td>
              <td>5:15PM </td>
              <td>8:32PM </td>
              <td>8:37PM </td>
              <td>10:00PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Tue </td>
              <td>4:16AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:11PM </td>
              <td>1:30PM </td>
              <td>5:01PM </td>
              <td>5:15PM </td>
              <td>8:32PM </td>
              <td>8:37PM </td>
              <td>10:00PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Wed </td>
              <td>4:16AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:12PM </td>
              <td>1:30PM </td>
              <td>5:01PM </td>
              <td>5:15PM </td>
              <td>8:33PM </td>
              <td>8:38PM </td>
              <td>10:01PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>15</td>
              <td>Thu </td>
              <td>4:16AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:12PM </td>
              <td>1:30PM </td>
              <td>5:02PM </td>
              <td>5:15PM </td>
              <td>8:33PM </td>
              <td>8:38PM </td>
              <td>10:01PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Fri </td>
              <td>4:16AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:12PM </td>
              <td>1:30PM </td>
              <td>5:02PM </td>
              <td>5:15PM </td>
              <td>8:33PM </td>
              <td>8:38PM </td>
              <td>10:02PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Sat </td>
              <td>4:16AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:12PM </td>
              <td>1:30PM </td>
              <td>5:02PM </td>
              <td>5:15PM </td>
              <td>8:34PM </td>
              <td>8:39PM </td>
              <td>10:02PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Sun </td>
              <td>4:16AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:12PM </td>
              <td>1:30PM </td>
              <td>5:02PM </td>
              <td>5:15PM </td>
              <td>8:34PM </td>
              <td>8:39PM </td>
              <td>10:02PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Mon </td>
              <td>4:17AM </td>
              <td>5:00AM </td>
              <td>5:46AM </td>
              <td>1:13PM </td>
              <td>1:30PM </td>
              <td>5:03PM </td>
              <td>5:15PM </td>
              <td>8:34PM </td>
              <td>8:39PM </td>
              <td>10:03PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Tue </td>
              <td>4:17AM </td>
              <td>5:00AM </td>
              <td>5:47AM </td>
              <td>1:13PM </td>
              <td>1:30PM </td>
              <td>5:03PM </td>
              <td>5:15PM </td>
              <td>8:34PM </td>
              <td>8:39PM </td>
              <td>10:03PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>21</td>
              <td>Wed </td>
              <td>4:17AM </td>
              <td>5:00AM </td>
              <td>5:47AM </td>
              <td>1:13PM </td>
              <td>1:30PM </td>
              <td>5:03PM </td>
              <td>5:15PM </td>
              <td>8:35PM </td>
              <td>8:40PM </td>
              <td>10:03PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>22</td>
              <td>Thu </td>
              <td>4:17AM </td>
              <td>5:00AM </td>
              <td>5:47AM </td>
              <td>1:13PM </td>
              <td>1:30PM </td>
              <td>5:03PM </td>
              <td>5:15PM </td>
              <td>8:35PM </td>
              <td>8:40PM </td>
              <td>10:03PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>23</td>
              <td>Fri </td>
              <td>4:17AM </td>
              <td>5:00AM </td>
              <td>5:47AM </td>
              <td>1:14PM </td>
              <td>1:30PM </td>
              <td>5:03PM </td>
              <td>5:15PM </td>
              <td>8:35PM </td>
              <td>8:40PM </td>
              <td>10:04PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>24</td>
              <td>Sat </td>
              <td>4:18AM </td>
              <td>5:00AM </td>
              <td>5:48AM </td>
              <td>1:14PM </td>
              <td>1:30PM </td>
              <td>5:04PM </td>
              <td>5:15PM </td>
              <td>8:35PM </td>
              <td>8:40PM </td>
              <td>10:04PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>25</td>
              <td>Sun </td>
              <td>4:18AM </td>
              <td>5:00AM </td>
              <td>5:48AM </td>
              <td>1:14PM </td>
              <td>1:30PM </td>
              <td>5:04PM </td>
              <td>5:15PM </td>
              <td>8:35PM </td>
              <td>8:40PM </td>
              <td>10:04PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>26</td>
              <td>Mon </td>
              <td>4:19AM </td>
              <td>5:00AM </td>
              <td>5:48AM </td>
              <td>1:14PM </td>
              <td>1:30PM </td>
              <td>5:04PM </td>
              <td>5:15PM </td>
              <td>8:35PM </td>
              <td>8:40PM </td>
              <td>10:04PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>27</td>
              <td>Tue </td>
              <td>4:19AM </td>
              <td>5:00AM </td>
              <td>5:49AM </td>
              <td>1:14PM </td>
              <td>1:30PM </td>
              <td>5:04PM </td>
              <td>5:15PM </td>
              <td>8:35PM </td>
              <td>8:40PM </td>
              <td>10:04PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>28</td>
              <td>Wed </td>
              <td>4:20AM </td>
              <td>5:00AM </td>
              <td>5:49AM </td>
              <td>1:15PM </td>
              <td>1:30PM </td>
              <td>5:04PM </td>
              <td>5:15PM </td>
              <td>8:35PM </td>
              <td>8:40PM </td>
              <td>10:04PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>29</td>
              <td>Thu </td>
              <td>4:20AM </td>
              <td>5:00AM </td>
              <td>5:49AM </td>
              <td>1:15PM </td>
              <td>1:30PM </td>
              <td>5:05PM </td>
              <td>5:15PM </td>
              <td>8:35PM </td>
              <td>8:40PM </td>
              <td>10:04PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>30</td>
              <td>Fri </td>
              <td>4:21AM </td>
              <td>5:00AM </td>
              <td>5:50AM </td>
              <td>1:15PM </td>
              <td>1:30PM </td>
              <td>5:05PM </td>
              <td>5:15PM </td>
              <td>8:35PM </td>
              <td>8:40PM </td>
              <td>10:03PM </td>
              <td>10:10PM </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default sixMonth;
