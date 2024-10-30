
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-29 22:10:00", "b": 574.6}, {"a": "2024-10-29 22:15:00", "b": 570.2}, {"a": "2024-10-29 22:20:00", "b": 581.75}, {"a": "2024-10-29 22:25:00", "b": 590.0}, {"a": "2024-10-29 22:30:00", "b": 589.75}, {"a": "2024-10-29 22:35:00", "b": 595.5}, {"a": "2024-10-29 22:40:00", "b": 608.75}, {"a": "2024-10-29 22:45:00", "b": 612.5}, {"a": "2024-10-29 22:50:00", "b": 622.6}, {"a": "2024-10-29 22:55:00", "b": 621.6}, {"a": "2024-10-29 23:00:00", "b": 605.0}, {"a": "2024-10-29 23:05:00", "b": 617.6}, {"a": "2024-10-29 23:10:00", "b": 622.6}, {"a": "2024-10-29 23:15:00", "b": 613.25}, {"a": "2024-10-29 23:20:00", "b": 601.0}, {"a": "2024-10-29 23:25:00", "b": 613.25}, {"a": "2024-10-29 23:30:00", "b": 618.3333333333334}, {"a": "2024-10-29 23:35:00", "b": 609.4}, {"a": "2024-10-29 23:40:00", "b": 584.2}, {"a": "2024-10-29 23:45:00", "b": 596.4}, {"a": "2024-10-29 23:50:00", "b": 610.0}, {"a": "2024-10-29 23:55:00", "b": 605.5}, {"a": "2024-10-30 00:00:00", "b": 597.75}, {"a": "2024-10-30 00:05:00", "b": 606.5}, {"a": "2024-10-30 00:10:00", "b": 611.6}, {"a": "2024-10-30 00:15:00", "b": 608.0}, {"a": "2024-10-30 00:20:00", "b": 594.4}, {"a": "2024-10-30 00:25:00", "b": 589.2}, {"a": "2024-10-30 00:30:00", "b": 585.3333333333334}, {"a": "2024-10-30 00:35:00", "b": 596.0}, {"a": "2024-10-30 00:40:00", "b": 608.25}, {"a": "2024-10-30 00:45:00", "b": 604.0}, {"a": "2024-10-30 00:50:00", "b": 597.8}, {"a": "2024-10-30 00:55:00", "b": 590.25}, {"a": "2024-10-30 01:00:00", "b": 597.2}, {"a": "2024-10-30 01:05:00", "b": 604.4}, {"a": "2024-10-30 01:10:00", "b": 593.8}, {"a": "2024-10-30 01:15:00", "b": 595.25}, {"a": "2024-10-30 01:20:00", "b": 597.4}, {"a": "2024-10-30 01:25:00", "b": 598.2}, {"a": "2024-10-30 01:30:00", "b": 600.8}, {"a": "2024-10-30 01:35:00", "b": 591.6666666666666}, {"a": "2024-10-30 01:40:00", "b": 585.6}, {"a": "2024-10-30 01:45:00", "b": 590.8}, {"a": "2024-10-30 01:50:00", "b": 594.75}, {"a": "2024-10-30 01:55:00", "b": 585.2}, {"a": "2024-10-30 02:00:00", "b": 587.0}, {"a": "2024-10-30 02:05:00", "b": 596.5}, {"a": "2024-10-30 02:10:00", "b": 597.0}, {"a": "2024-10-30 02:15:00", "b": 585.0}, {"a": "2024-10-30 02:20:00", "b": 569.4}, {"a": "2024-10-30 02:25:00", "b": 592.0}, {"a": "2024-10-30 02:30:00", "b": 597.6}, {"a": "2024-10-30 02:35:00", "b": 595.5}, {"a": "2024-10-30 02:40:00", "b": 594.5}, {"a": "2024-10-30 02:45:00", "b": 586.0}, {"a": "2024-10-30 02:50:00", "b": 580.8}, {"a": "2024-10-30 02:55:00", "b": 586.5}, {"a": "2024-10-30 03:00:00", "b": 572.5}, {"a": "2024-10-30 03:05:00", "b": 579.2}, {"a": "2024-10-30 03:10:00", "b": 581.25}, {"a": "2024-10-30 03:15:00", "b": 578.2}, {"a": "2024-10-30 03:20:00", "b": 569.0}, {"a": "2024-10-30 03:25:00", "b": 582.8}, {"a": "2024-10-30 03:30:00", "b": 571.6}, {"a": "2024-10-30 03:35:00", "b": 575.6}, {"a": "2024-10-30 03:40:00", "b": 580.0}, {"a": "2024-10-30 03:45:00", "b": 569.0}, {"a": "2024-10-30 03:50:00", "b": 578.8}, {"a": "2024-10-30 03:55:00", "b": 574.8}, {"a": "2024-10-30 04:00:00", "b": 574.4}, {"a": "2024-10-30 04:05:00", "b": 576.3333333333334}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    