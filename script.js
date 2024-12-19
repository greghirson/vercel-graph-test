
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-18 20:00:00", "b": 836.8}, {"a": "2024-12-18 20:05:00", "b": 816.6}, {"a": "2024-12-18 20:10:00", "b": 779.8}, {"a": "2024-12-18 20:15:00", "b": 793.2}, {"a": "2024-12-18 20:20:00", "b": 805.4}, {"a": "2024-12-18 20:25:00", "b": 827.8}, {"a": "2024-12-18 20:30:00", "b": 820.4}, {"a": "2024-12-18 20:35:00", "b": 810.4}, {"a": "2024-12-18 20:40:00", "b": 809.25}, {"a": "2024-12-18 20:45:00", "b": 806.75}, {"a": "2024-12-18 20:50:00", "b": 815.6}, {"a": "2024-12-18 20:55:00", "b": 809.0}, {"a": "2024-12-18 21:00:00", "b": 804.0}, {"a": "2024-12-18 21:05:00", "b": 810.25}, {"a": "2024-12-18 21:10:00", "b": 792.2}, {"a": "2024-12-18 21:15:00", "b": 786.4}, {"a": "2024-12-18 21:20:00", "b": 779.75}, {"a": "2024-12-18 21:25:00", "b": 780.4}, {"a": "2024-12-18 21:30:00", "b": 781.0}, {"a": "2024-12-18 21:35:00", "b": 780.8}, {"a": "2024-12-18 21:40:00", "b": 785.6666666666666}, {"a": "2024-12-18 21:45:00", "b": 780.2}, {"a": "2024-12-18 21:50:00", "b": 782.8}, {"a": "2024-12-18 21:55:00", "b": 799.0}, {"a": "2024-12-18 22:00:00", "b": 787.0}, {"a": "2024-12-18 22:05:00", "b": 778.4}, {"a": "2024-12-18 22:10:00", "b": 781.25}, {"a": "2024-12-18 22:15:00", "b": 785.5}, {"a": "2024-12-18 22:20:00", "b": 783.0}, {"a": "2024-12-18 22:25:00", "b": 773.2}, {"a": "2024-12-18 22:30:00", "b": 757.2}, {"a": "2024-12-18 22:35:00", "b": 743.4}, {"a": "2024-12-18 22:40:00", "b": 713.8}, {"a": "2024-12-18 22:45:00", "b": 680.4}, {"a": "2024-12-18 22:50:00", "b": 662.6}, {"a": "2024-12-18 22:55:00", "b": 664.0}, {"a": "2024-12-18 23:00:00", "b": 661.8}, {"a": "2024-12-18 23:05:00", "b": 663.2}, {"a": "2024-12-18 23:10:00", "b": 662.8}, {"a": "2024-12-18 23:15:00", "b": 662.5}, {"a": "2024-12-18 23:20:00", "b": 655.8}, {"a": "2024-12-18 23:25:00", "b": 646.75}, {"a": "2024-12-18 23:30:00", "b": 652.4}, {"a": "2024-12-18 23:35:00", "b": 643.25}, {"a": "2024-12-18 23:40:00", "b": 642.75}, {"a": "2024-12-18 23:45:00", "b": 639.2}, {"a": "2024-12-18 23:50:00", "b": 621.8}, {"a": "2024-12-18 23:55:00", "b": 614.6}, {"a": "2024-12-19 00:00:00", "b": 636.5}, {"a": "2024-12-19 00:05:00", "b": 633.0}, {"a": "2024-12-19 00:10:00", "b": 620.75}, {"a": "2024-12-19 00:15:00", "b": 612.2}, {"a": "2024-12-19 00:20:00", "b": 608.5}, {"a": "2024-12-19 00:25:00", "b": 603.5}, {"a": "2024-12-19 00:30:00", "b": 598.5}, {"a": "2024-12-19 00:35:00", "b": 604.6}, {"a": "2024-12-19 00:40:00", "b": 599.4}, {"a": "2024-12-19 00:45:00", "b": 594.5}, {"a": "2024-12-19 00:50:00", "b": 599.2}, {"a": "2024-12-19 00:55:00", "b": 594.0}, {"a": "2024-12-19 01:00:00", "b": 589.2}, {"a": "2024-12-19 01:05:00", "b": 572.5}, {"a": "2024-12-19 01:10:00", "b": 575.4}, {"a": "2024-12-19 01:15:00", "b": 585.0}, {"a": "2024-12-19 01:20:00", "b": 600.0}, {"a": "2024-12-19 01:25:00", "b": 615.4}, {"a": "2024-12-19 01:30:00", "b": 607.0}, {"a": "2024-12-19 01:35:00", "b": 605.8}, {"a": "2024-12-19 01:40:00", "b": 588.5}, {"a": "2024-12-19 01:45:00", "b": 556.4}, {"a": "2024-12-19 01:50:00", "b": 538.2}, {"a": "2024-12-19 01:55:00", "b": 519.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    