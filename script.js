
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-13 23:00:00", "b": 695.25}, {"a": "2024-12-13 23:05:00", "b": 675.75}, {"a": "2024-12-13 23:10:00", "b": 679.6}, {"a": "2024-12-13 23:15:00", "b": 677.4}, {"a": "2024-12-13 23:20:00", "b": 653.8}, {"a": "2024-12-13 23:25:00", "b": 646.75}, {"a": "2024-12-13 23:30:00", "b": 641.3333333333334}, {"a": "2024-12-13 23:35:00", "b": 652.0}, {"a": "2024-12-13 23:40:00", "b": 652.5}, {"a": "2024-12-13 23:45:00", "b": 643.25}, {"a": "2024-12-13 23:50:00", "b": 641.25}, {"a": "2024-12-13 23:55:00", "b": 642.8}, {"a": "2024-12-14 00:00:00", "b": 643.25}, {"a": "2024-12-14 00:05:00", "b": 627.75}, {"a": "2024-12-14 00:10:00", "b": 635.2}, {"a": "2024-12-14 00:15:00", "b": 620.0}, {"a": "2024-12-14 00:20:00", "b": 633.75}, {"a": "2024-12-14 00:25:00", "b": 634.4}, {"a": "2024-12-14 00:30:00", "b": 625.5}, {"a": "2024-12-14 00:35:00", "b": 618.25}, {"a": "2024-12-14 00:40:00", "b": 616.0}, {"a": "2024-12-14 00:45:00", "b": 615.25}, {"a": "2024-12-14 00:50:00", "b": 618.8}, {"a": "2024-12-14 00:55:00", "b": 612.8}, {"a": "2024-12-14 01:00:00", "b": 619.25}, {"a": "2024-12-14 01:05:00", "b": 612.0}, {"a": "2024-12-14 01:10:00", "b": 609.75}, {"a": "2024-12-14 01:15:00", "b": 608.5}, {"a": "2024-12-14 01:20:00", "b": 604.2}, {"a": "2024-12-14 01:25:00", "b": 605.75}, {"a": "2024-12-14 01:30:00", "b": 604.6}, {"a": "2024-12-14 01:35:00", "b": 599.8}, {"a": "2024-12-14 01:40:00", "b": 594.75}, {"a": "2024-12-14 01:45:00", "b": 602.75}, {"a": "2024-12-14 01:50:00", "b": 588.8}, {"a": "2024-12-14 01:55:00", "b": 588.75}, {"a": "2024-12-14 02:00:00", "b": 599.2}, {"a": "2024-12-14 02:05:00", "b": 595.2}, {"a": "2024-12-14 02:10:00", "b": 593.2}, {"a": "2024-12-14 02:15:00", "b": 590.0}, {"a": "2024-12-14 02:20:00", "b": 594.5}, {"a": "2024-12-14 02:25:00", "b": 591.8}, {"a": "2024-12-14 02:30:00", "b": 583.2}, {"a": "2024-12-14 02:35:00", "b": 571.6}, {"a": "2024-12-14 02:40:00", "b": 580.4}, {"a": "2024-12-14 02:45:00", "b": 580.4}, {"a": "2024-12-14 02:50:00", "b": 589.2}, {"a": "2024-12-14 02:55:00", "b": 586.0}, {"a": "2024-12-14 03:00:00", "b": 572.5}, {"a": "2024-12-14 03:05:00", "b": 566.4}, {"a": "2024-12-14 03:10:00", "b": 566.2}, {"a": "2024-12-14 03:15:00", "b": 567.6666666666666}, {"a": "2024-12-14 03:20:00", "b": 574.3333333333334}, {"a": "2024-12-14 03:25:00", "b": 572.6}, {"a": "2024-12-14 03:30:00", "b": 577.2}, {"a": "2024-12-14 03:35:00", "b": 561.75}, {"a": "2024-12-14 03:40:00", "b": 555.4}, {"a": "2024-12-14 03:45:00", "b": 546.2}, {"a": "2024-12-14 03:50:00", "b": 551.2}, {"a": "2024-12-14 03:55:00", "b": 527.4}, {"a": "2024-12-14 04:00:00", "b": 527.6}, {"a": "2024-12-14 04:05:00", "b": 543.25}, {"a": "2024-12-14 04:10:00", "b": 536.6}, {"a": "2024-12-14 04:15:00", "b": 541.0}, {"a": "2024-12-14 04:20:00", "b": 538.4}, {"a": "2024-12-14 04:25:00", "b": 551.6}, {"a": "2024-12-14 04:30:00", "b": 623.8}, {"a": "2024-12-14 04:35:00", "b": 636.2}, {"a": "2024-12-14 04:40:00", "b": 577.0}, {"a": "2024-12-14 04:45:00", "b": 576.6}, {"a": "2024-12-14 04:50:00", "b": 586.0}, {"a": "2024-12-14 04:55:00", "b": 573.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    