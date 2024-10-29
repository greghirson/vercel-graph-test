
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-28 19:00:00", "b": 559.25}, {"a": "2024-10-28 19:05:00", "b": 556.8}, {"a": "2024-10-28 19:10:00", "b": 550.0}, {"a": "2024-10-28 19:15:00", "b": 559.6666666666666}, {"a": "2024-10-28 19:20:00", "b": 572.75}, {"a": "2024-10-28 19:25:00", "b": 595.6}, {"a": "2024-10-28 19:30:00", "b": 606.75}, {"a": "2024-10-28 19:35:00", "b": 612.8}, {"a": "2024-10-28 19:40:00", "b": 617.75}, {"a": "2024-10-28 19:45:00", "b": 627.8}, {"a": "2024-10-28 19:50:00", "b": 649.2}, {"a": "2024-10-28 19:55:00", "b": 657.75}, {"a": "2024-10-28 20:00:00", "b": 662.0}, {"a": "2024-10-28 20:05:00", "b": 651.8}, {"a": "2024-10-28 20:10:00", "b": 638.8}, {"a": "2024-10-28 20:15:00", "b": 640.0}, {"a": "2024-10-28 20:20:00", "b": 646.2}, {"a": "2024-10-28 20:25:00", "b": 659.75}, {"a": "2024-10-28 20:30:00", "b": 652.6666666666666}, {"a": "2024-10-28 20:35:00", "b": 651.2}, {"a": "2024-10-28 20:40:00", "b": 647.2}, {"a": "2024-10-28 20:45:00", "b": 646.0}, {"a": "2024-10-28 20:50:00", "b": 645.25}, {"a": "2024-10-28 20:55:00", "b": 638.2}, {"a": "2024-10-28 21:00:00", "b": 644.2}, {"a": "2024-10-28 21:05:00", "b": 643.6}, {"a": "2024-10-28 21:10:00", "b": 633.8}, {"a": "2024-10-28 21:15:00", "b": 647.2}, {"a": "2024-10-28 21:20:00", "b": 639.4}, {"a": "2024-10-28 21:25:00", "b": 637.6}, {"a": "2024-10-28 21:30:00", "b": 648.6}, {"a": "2024-10-28 21:35:00", "b": 645.5}, {"a": "2024-10-28 21:40:00", "b": 641.6}, {"a": "2024-10-28 21:45:00", "b": 639.8}, {"a": "2024-10-28 21:50:00", "b": 641.0}, {"a": "2024-10-28 21:55:00", "b": 642.2}, {"a": "2024-10-28 22:00:00", "b": 646.2}, {"a": "2024-10-28 22:05:00", "b": 643.3333333333334}, {"a": "2024-10-28 22:10:00", "b": 625.25}, {"a": "2024-10-28 22:15:00", "b": 637.0}, {"a": "2024-10-28 22:20:00", "b": 642.0}, {"a": "2024-10-28 22:25:00", "b": 626.0}, {"a": "2024-10-28 22:30:00", "b": 631.6}, {"a": "2024-10-28 22:35:00", "b": 631.75}, {"a": "2024-10-28 22:40:00", "b": 627.5}, {"a": "2024-10-28 22:45:00", "b": 628.2}, {"a": "2024-10-28 22:50:00", "b": 626.0}, {"a": "2024-10-28 22:55:00", "b": 628.0}, {"a": "2024-10-28 23:00:00", "b": 626.6}, {"a": "2024-10-28 23:05:00", "b": 622.6}, {"a": "2024-10-28 23:10:00", "b": 619.5}, {"a": "2024-10-28 23:15:00", "b": 612.75}, {"a": "2024-10-28 23:20:00", "b": 621.0}, {"a": "2024-10-28 23:25:00", "b": 613.25}, {"a": "2024-10-28 23:30:00", "b": 602.2}, {"a": "2024-10-28 23:35:00", "b": 600.25}, {"a": "2024-10-28 23:40:00", "b": 598.25}, {"a": "2024-10-28 23:45:00", "b": 597.6}, {"a": "2024-10-28 23:50:00", "b": 600.8}, {"a": "2024-10-28 23:55:00", "b": 599.75}, {"a": "2024-10-29 00:00:00", "b": 588.5}, {"a": "2024-10-29 00:05:00", "b": 589.75}, {"a": "2024-10-29 00:10:00", "b": 597.2}, {"a": "2024-10-29 00:15:00", "b": 590.0}, {"a": "2024-10-29 00:20:00", "b": 587.0}, {"a": "2024-10-29 00:25:00", "b": 581.0}, {"a": "2024-10-29 00:30:00", "b": 585.0}, {"a": "2024-10-29 00:35:00", "b": 588.0}, {"a": "2024-10-29 00:40:00", "b": 590.2}, {"a": "2024-10-29 00:45:00", "b": 601.25}, {"a": "2024-10-29 00:50:00", "b": 602.0}, {"a": "2024-10-29 00:55:00", "b": 581.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    