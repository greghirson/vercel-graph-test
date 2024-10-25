
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-25 05:20:00", "b": 524.4}, {"a": "2024-10-25 05:25:00", "b": 528.8}, {"a": "2024-10-25 05:30:00", "b": 530.0}, {"a": "2024-10-25 05:35:00", "b": 529.8}, {"a": "2024-10-25 05:40:00", "b": 527.6}, {"a": "2024-10-25 05:45:00", "b": 526.75}, {"a": "2024-10-25 05:50:00", "b": 531.25}, {"a": "2024-10-25 05:55:00", "b": 529.0}, {"a": "2024-10-25 06:00:00", "b": 530.0}, {"a": "2024-10-25 06:05:00", "b": 535.0}, {"a": "2024-10-25 06:10:00", "b": 542.4}, {"a": "2024-10-25 06:15:00", "b": 542.6}, {"a": "2024-10-25 06:20:00", "b": 544.0}, {"a": "2024-10-25 06:25:00", "b": 534.25}, {"a": "2024-10-25 06:30:00", "b": 533.2}, {"a": "2024-10-25 06:35:00", "b": 552.75}, {"a": "2024-10-25 06:40:00", "b": 555.25}, {"a": "2024-10-25 06:45:00", "b": 554.8}, {"a": "2024-10-25 06:50:00", "b": 559.6}, {"a": "2024-10-25 06:55:00", "b": 566.6}, {"a": "2024-10-25 07:00:00", "b": 565.0}, {"a": "2024-10-25 07:05:00", "b": 569.0}, {"a": "2024-10-25 07:10:00", "b": 612.2}, {"a": "2024-10-25 07:15:00", "b": 651.0}, {"a": "2024-10-25 07:20:00", "b": 644.4}, {"a": "2024-10-25 07:25:00", "b": 665.2}, {"a": "2024-10-25 07:30:00", "b": 679.8}, {"a": "2024-10-25 07:35:00", "b": 708.4}, {"a": "2024-10-25 07:40:00", "b": 749.25}, {"a": "2024-10-25 07:45:00", "b": 754.2}, {"a": "2024-10-25 07:50:00", "b": 775.75}, {"a": "2024-10-25 07:55:00", "b": 805.6}, {"a": "2024-10-25 08:00:00", "b": 851.6}, {"a": "2024-10-25 08:05:00", "b": 878.6}, {"a": "2024-10-25 08:10:00", "b": 883.0}, {"a": "2024-10-25 08:15:00", "b": 918.4}, {"a": "2024-10-25 08:20:00", "b": 1008.4}, {"a": "2024-10-25 08:25:00", "b": 1005.8}, {"a": "2024-10-25 08:30:00", "b": 818.0}, {"a": "2024-10-25 08:35:00", "b": 797.4}, {"a": "2024-10-25 08:40:00", "b": 780.2}, {"a": "2024-10-25 08:45:00", "b": 760.4}, {"a": "2024-10-25 08:50:00", "b": 730.6}, {"a": "2024-10-25 08:55:00", "b": 734.2}, {"a": "2024-10-25 09:00:00", "b": 737.0}, {"a": "2024-10-25 09:05:00", "b": 745.6666666666666}, {"a": "2024-10-25 09:10:00", "b": 726.2}, {"a": "2024-10-25 09:15:00", "b": 686.8}, {"a": "2024-10-25 09:20:00", "b": 661.5}, {"a": "2024-10-25 09:25:00", "b": 645.2}, {"a": "2024-10-25 09:30:00", "b": 623.5}, {"a": "2024-10-25 09:35:00", "b": 626.0}, {"a": "2024-10-25 09:40:00", "b": 623.0}, {"a": "2024-10-25 09:45:00", "b": 623.8}, {"a": "2024-10-25 09:50:00", "b": 612.0}, {"a": "2024-10-25 09:55:00", "b": 617.5}, {"a": "2024-10-25 10:00:00", "b": 605.0}, {"a": "2024-10-25 10:05:00", "b": 609.4}, {"a": "2024-10-25 10:10:00", "b": 616.0}, {"a": "2024-10-25 10:15:00", "b": 601.0}, {"a": "2024-10-25 10:20:00", "b": 592.75}, {"a": "2024-10-25 10:25:00", "b": 595.0}, {"a": "2024-10-25 10:30:00", "b": 596.6}, {"a": "2024-10-25 10:35:00", "b": 592.8}, {"a": "2024-10-25 10:40:00", "b": 595.0}, {"a": "2024-10-25 10:45:00", "b": 612.6}, {"a": "2024-10-25 10:50:00", "b": 616.0}, {"a": "2024-10-25 10:55:00", "b": 616.6666666666666}, {"a": "2024-10-25 11:00:00", "b": 612.5}, {"a": "2024-10-25 11:05:00", "b": 611.0}, {"a": "2024-10-25 11:10:00", "b": 603.75}, {"a": "2024-10-25 11:15:00", "b": 623.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    