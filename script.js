
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-25 08:40:00", "b": 780.2}, {"a": "2024-10-25 08:45:00", "b": 760.4}, {"a": "2024-10-25 08:50:00", "b": 730.6}, {"a": "2024-10-25 08:55:00", "b": 734.2}, {"a": "2024-10-25 09:00:00", "b": 737.0}, {"a": "2024-10-25 09:05:00", "b": 745.6666666666666}, {"a": "2024-10-25 09:10:00", "b": 726.2}, {"a": "2024-10-25 09:15:00", "b": 686.8}, {"a": "2024-10-25 09:20:00", "b": 661.5}, {"a": "2024-10-25 09:25:00", "b": 645.2}, {"a": "2024-10-25 09:30:00", "b": 623.5}, {"a": "2024-10-25 09:35:00", "b": 626.0}, {"a": "2024-10-25 09:40:00", "b": 623.0}, {"a": "2024-10-25 09:45:00", "b": 623.8}, {"a": "2024-10-25 09:50:00", "b": 612.0}, {"a": "2024-10-25 09:55:00", "b": 617.5}, {"a": "2024-10-25 10:00:00", "b": 605.0}, {"a": "2024-10-25 10:05:00", "b": 609.4}, {"a": "2024-10-25 10:10:00", "b": 616.0}, {"a": "2024-10-25 10:15:00", "b": 601.0}, {"a": "2024-10-25 10:20:00", "b": 592.75}, {"a": "2024-10-25 10:25:00", "b": 595.0}, {"a": "2024-10-25 10:30:00", "b": 596.6}, {"a": "2024-10-25 10:35:00", "b": 592.8}, {"a": "2024-10-25 10:40:00", "b": 595.0}, {"a": "2024-10-25 10:45:00", "b": 612.6}, {"a": "2024-10-25 10:50:00", "b": 616.0}, {"a": "2024-10-25 10:55:00", "b": 616.6666666666666}, {"a": "2024-10-25 11:00:00", "b": 612.5}, {"a": "2024-10-25 11:05:00", "b": 611.0}, {"a": "2024-10-25 11:10:00", "b": 603.75}, {"a": "2024-10-25 11:15:00", "b": 623.8}, {"a": "2024-10-25 11:20:00", "b": 622.0}, {"a": "2024-10-25 11:25:00", "b": 606.8}, {"a": "2024-10-25 11:30:00", "b": 604.75}, {"a": "2024-10-25 11:35:00", "b": 595.0}, {"a": "2024-10-25 11:40:00", "b": 586.6}, {"a": "2024-10-25 11:45:00", "b": 605.75}, {"a": "2024-10-25 11:50:00", "b": 596.4}, {"a": "2024-10-25 11:55:00", "b": 602.4}, {"a": "2024-10-25 12:00:00", "b": 620.75}, {"a": "2024-10-25 12:05:00", "b": 616.8}, {"a": "2024-10-25 12:10:00", "b": 617.6}, {"a": "2024-10-25 12:15:00", "b": 620.75}, {"a": "2024-10-25 12:20:00", "b": 620.2}, {"a": "2024-10-25 12:25:00", "b": 619.8}, {"a": "2024-10-25 12:30:00", "b": 621.75}, {"a": "2024-10-25 12:35:00", "b": 615.6666666666666}, {"a": "2024-10-25 12:40:00", "b": 610.0}, {"a": "2024-10-25 12:45:00", "b": 601.8}, {"a": "2024-10-25 12:50:00", "b": 607.25}, {"a": "2024-10-25 12:55:00", "b": 615.6}, {"a": "2024-10-25 13:00:00", "b": 606.8}, {"a": "2024-10-25 13:05:00", "b": 578.25}, {"a": "2024-10-25 13:10:00", "b": 574.4}, {"a": "2024-10-25 13:15:00", "b": 570.2}, {"a": "2024-10-25 13:20:00", "b": 553.0}, {"a": "2024-10-25 13:25:00", "b": 566.5}, {"a": "2024-10-25 13:30:00", "b": 555.2}, {"a": "2024-10-25 13:35:00", "b": 547.0}, {"a": "2024-10-25 13:40:00", "b": 554.2}, {"a": "2024-10-25 13:45:00", "b": 544.2}, {"a": "2024-10-25 13:50:00", "b": 552.75}, {"a": "2024-10-25 13:55:00", "b": 556.3333333333334}, {"a": "2024-10-25 14:00:00", "b": 528.4}, {"a": "2024-10-25 14:05:00", "b": 528.2}, {"a": "2024-10-25 14:10:00", "b": 529.0}, {"a": "2024-10-25 14:15:00", "b": 517.0}, {"a": "2024-10-25 14:20:00", "b": 506.0}, {"a": "2024-10-25 14:25:00", "b": 510.6}, {"a": "2024-10-25 14:30:00", "b": 499.0}, {"a": "2024-10-25 14:35:00", "b": 489.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    